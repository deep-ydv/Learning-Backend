// import readline from "readline";
const readline = require("readline");
// import fs from "fs";
const fs = require("fs");
// import path from "path";
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let flag = 0,
  fName = "";
const createFile = () => {
  if (flag == 0) {
    rl.question("Enter File Name : ", (name) => {
      fName = name;
      flag++;
      createFile();
    });
  }
  const fileName = `${fName}.txt`;
  const pathName = path.join(__dirname, fileName);

  rl.question("Enter the content: ", (content) => {
    fs.writeFileSync(pathName, content, "utf-8");
    console.log(fName + ".txt Created Successfully");
    rl.close();
  });
};
createFile();
