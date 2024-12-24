import readline from "readline";
import https from "https";

const apiKey="d6cd576125df86679b3ca969";
const url=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`;

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

https.get(url,(response)=>{
  let data="";
  response.on("data",(chunk)=>{
    data+=chunk;
  })
 

  response.on("end",()=>{
    const rates=JSON.parse(data).conversion_rates;
    console.log(rates);
    

    rl.question(`Enter Amount in INR : `,(amt)=>{
      rl.question("Enter Currency to Convert(e.g USD,NPR,AED etc) : ",(currency)=>{
        const currencyUpper=currency.toUpperCase();
        const convertedAmt=rates[currencyUpper] * amt; // error here
        console.log(convertedAmt);
        console.log(`${amt} USD is approximately equal to ${convertedAmt} ${currency}`);
        rl.close();
      })
    })

  })
  
})