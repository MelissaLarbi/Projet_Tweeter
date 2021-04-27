// le code du server 

const express = require("express") // pour coder les traitement que réalise le server 
const bodyparser = require("body-parser"); //pour parser le resultat de post 
const cors = require("cors");
const router = require("./routes.js"); // Télecharget le fichier des routes


const app = express() // le server
app.use("/",router);
app.use(bodyparser.json({limit: "30mb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())
module.exports = app ; 
