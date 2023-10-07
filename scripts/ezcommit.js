const {
  run,
  verifyPathExists,
  generateCommitMessage,
} = require("@robosushie/ezgit");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

  const message = await generateCommitMessage(config, diff);
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
