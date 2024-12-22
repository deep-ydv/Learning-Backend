const EventEmiiter=require("events");

// const emitter=new EventEmiiter();

// emitter.on("greet",()=>{
//   console.log("Working");
// })

// emitter.emit("greet");

const task=new EventEmiiter();

let cnt=0;
task.on("userlogin",()=>{
  console.log("User Login Successfully");
  cnt++;
})
task.emit("userlogin");

task.on("userlogout",()=>{
  console.log("User Logout Successfully");
  cnt++;
})
task.emit("userlogout");

task.on("userPurchase",()=>{
  console.log("Purchase Successfully");
  cnt++;
})
task.emit("userPurchase");

task.on("profileUpdate",()=>{
  console.log("Profile Updated Successfully");
  cnt++;
})
task.emit("profileUpdate");

task.on("summary",()=>{
  console.log("Event Emit ",+cnt+" Times");
  
})
task.emit("summary");
