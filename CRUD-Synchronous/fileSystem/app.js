const fs=require("fs");
const path=require('path');
const fileName="test.txt";
const pathName=path.join(__dirname,fileName);
fs.writeFileSync(pathName,"This is Intial Data","utf-8");
fs.appendFileSync(pathName,"\n This is updated data","utf-8");

const readFile=fs.readFileSync(pathName,"utf-8");
// fs.unlinkSync(pathName); For delete a file
console.log(readFile);
const newPathName="updatedpath.txt"
const newPath=path.join(__dirname,newPathName);
fs.renameSync(pathName,newPath);