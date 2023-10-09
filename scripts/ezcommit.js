const {
  run,
  verifyPathExists,
  generateCommitMessage,
} = require("@robosushie/ezgit");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cleanGitDiff = (diff) => {
  // Split the diff by lines
  const lines = diff.split("\n");

  let currentFile = null;
  const result = {};

  for (let line of lines) {
    // Check if the line starts with 'diff --git' to get the filename
    if (line.startsWith("diff --git")) {
      currentFile = line.split(" ")[2].substring(2); // Extract the filename
      result[currentFile] = [];
    } else if (
      currentFile &&
      (line.startsWith("+") || line.startsWith("-")) &&
      !line.startsWith("+++ ") &&
      !line.startsWith("--- ")
    ) {
      // Check if the line starts with '+' or '-' to get the changes, but exclude the lines that start with '+++ ' or '--- '
      result[currentFile].push(line);
    }
  }

  return Object.entries(result)
    .map(([key, valueArray]) => key + " " + valueArray.join(" "))
    .join("\n");
};

const rootDirectory = process.cwd();

(async () => {
  if (!verifyPathExists("ezgit.config.js")) {
    console.error(
      "Cannot find 'ezgit.config.js'. Ensure 'ezgit' is initialized in project directory."
    );
    return;
  }

  const config = require(`${rootDirectory}/ezgit.config.js`);

  run(`git add .`);

  const excludeList = config["exclude-file-list"];
  const excludeCmd = excludeList.map((item) => `:(exclude)` + item + ``);
  const diff = run(`git diff --staged -- . ${excludeCmd.join(" ")}`);

  const cleanDiff = cleanGitDiff(diff);
  console.log(cleanDiff);

  return;

  const message = await generateCommitMessage(config, cleanDiff);
  console.log(message, "\n");

  readline.question(
    "Do you want to continue with the commit and push process? ( y/N ) : ",
    async (output) => {
      if (
        output == "y" ||
        output == "Y" ||
        output == "yes" ||
        output == "Yes"
      ) {
        run(`git commit -m "${message}"`);
        run(`git push origin main`);
      }
      readline.close();
    }
  );
})();
