import readline from "readline";
import fs from "fs";

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const creatingFile=()=>{
  rl.question("Enter File Name : ",(fileName)=>{
    rl.question("Enter File Content : ",(content)=>{
      fs.writeFile(`${fileName}.txt`,content,(err)=>{
          if(err) console.error(`Error writing the filing ${err.message}`);
          else console.log(`${fileName}.txt Created Successfully`)
          rl.close();
      })
    })
  })
}

creatingFile();







// SYNCRONOUS METHOD - FOR THIS REMOVE TYPE:MODULE FROM PACKAGE.JSON FILE

// // import readline from "readline";
// const readline = require("readline");
// // import fs from "fs";
// const fs = require("fs");
// // import path from "path";
// const path = require("path");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let flag = 0,
//   fName = "";
// const createFile = () => {
//   if (flag == 0) {
//     rl.question("Enter File Name : ", (name) => {
//       fName = name;
//       flag++;
//       createFile();
//     });
//   }
//   const fileName = `${fName}.txt`;
//   const pathName = path.join(__dirname, fileName);

//   rl.question("Enter the content: ", (content) => {
//     fs.writeFileSync(pathName, content, "utf-8");
//     console.log(fName + ".txt Created Successfully");
//     rl.close();
//   });
// };
// createFile();


