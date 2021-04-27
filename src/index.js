const app = require("./app.js") // le code du server 
require("dotenv").config({path:"./src/config/.env"})

app.listen(process.env.PORT,()=>{
    console.log(`server listen on prt ${process.env.PORT}`);
})