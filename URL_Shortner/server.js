import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";
import { writeFile } from "fs/promises";
console.log("Server is starting...");

const DATA_FILE=path.join("data","links.json");

const serverFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
};

const loadLinks=async()=>{
  try {
    const data=await readFile(DATA_FILE,"utf-8");
    return JSON.parse(data);
  } catch (error) {
    if(error.code === "ENOENT"){
      await writeFile(DATA_FILE,JSON.stringify({}))
      return {};
    }
    throw error;
  }
};
const saveLinks=async(links)=>{
  await writeFile(DATA_FILE,JSON.stringify(links));
}

const server = createServer(async (req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  if (req.method === "GET") {
    if (req.url === "/") {
      return serverFile(res, path.join("public", "index.html"), "text/html");
    }
    else if (req.url === "/style.css") {
      return serverFile(res,path.join("public", "style.css"),"text/css");
    }
  }

 

  if(req.method==="POST" && req.url==="/shorten"){
    const links=await loadLinks();
    let body=""
    req.on("data",(chunk)=>{
      body+=chunk;
    })

    req.on("end",async()=>{
      console.log(body);
      const {url,shortCode}=JSON.parse(body);
      if(!url){
         res.writeHead(404,{"Content-Type":"text/plain"})
         return res.end("URL is required");
      }

      const finalShortCode=shortCode || crypto.randomBytes(4).toString("hex");
      
      if(links[finalShortCode]){
        res.writeHead(404,{"Content-Type":"text/plain"})
        return res.end("Short Code Already Exist. Try Again...");
      }
      links[finalShortCode]=url;
      await saveLinks(links);
      
      res.writeHead(200,{"Content-Tyoe":"application/json"})
      res.end(JSON.stringify({success:true , shortCode:finalShortCode}))
    })
  }


});
const PORT = 3457;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
