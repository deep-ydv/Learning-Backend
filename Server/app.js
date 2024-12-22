const http=require("http");

const server=http.createServer((req,res)=>{
  if(req.url == "/"){
    res.write("Hello I am Pradeep Kumar Yadav");
    res.end();
  }
  if(req.url =="/another"){
    res.write("Next page");
    res.end();
  }
  if(req.url=="/about"){
    res.write("About Page hello working");
    res.end();
  }
});

const PORT=3456;
server.listen(PORT,()=>{
  console.log(`Listening on PORT ${PORT}`);
})


