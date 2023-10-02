require("dotenv").config({ path: ".env" });
const { exec, execFile } = require("child_process");
const path = require("path");

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const excludeList = ["package.json", "package-lock.json"];
const excludeListCommand = excludeList.map((i) => `:(exclude)` + i + ``);
const git_diff_command = `git diff --staged -- . ${excludeListCommand.join(
  " "
)}`;

const rootDirectory = path.join(__dirname, "..");

const AI_KEY = process.env.OPENAI_API_KEY;

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: rootDirectory }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(true);
    });
  });
};

const getGitDiff = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: rootDirectory }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
};

const getGitCommitMessage = (diff) => {
  let prompt = JSON.stringify(
    `As a professional software developer working on a scale project. Using the following diff, write a professional commit message and detailed explanation - ${diff}.`
  );

  return prompt;
};

const cleanGPTOutput = (message) => {
  if (message.includes("**Commit message:**")) {
    message = message.split("**Commit message:**")[1];
  } else if (message.includes("**Commit Message:**")) {
    message = message.split("**Commit Message:**")[1];
  }
  if (message.includes("**Detailed explanation:**")) {
    message = message.split("**Detailed explanation:**")[0];
  } else if (message.includes("**Detailed Explanation:**")) {
    message = message.split("**Detailed Explanation:**")[0];
  }
  message = message.replaceAll("```", "");
  return message;
};

(async () => {
  try {
    console.log("Running command 'git add .'");
    await runCommand("git add .");

    console.log("Fetching git diff...");
    let gitDiff = await getGitDiff(git_diff_command);
    console.log("Success !!!");

    console.log("Fetching git commit message...");
    let gitCommitMessage = getGitCommitMessage(gitDiff);
    // gitCommitMessage = cleanGPTOutput(gitCommitMessage);
    console.log("Success !!!");

    console.log("Git commit Message:", gitCommitMessage);
    // readline.question(
    //   "Do you want to proceed with the above? ( Y/n ) : ",
    //   async (output) => {
    //     if (
    //       output == "y" ||
    //       output == "Y" ||
    //       output == "yes" ||
    //       output == "Yes" ||
    //       output == ""
    //     ) {
    //         await runCommand(`git commit -m "${gitCommitMessage}"`);
    //       console.log();
    //       readline.close();
    //     } else {
    //       readline.question(
    //         "Write the desired commit message : ",
    //         async (output) => {
    //           await runCommand(`git commit -m "${output}"`);
    //           readline.close();
    //         }
    //       );
    //     }
    //   }
    // );
  } catch (error) {
    console.log(error);
  }
})();
