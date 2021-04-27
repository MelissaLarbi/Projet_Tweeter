const userModel = require("../models/userModel"); // le model du user 
const userModel = new userModel(); 
const bcrypt = require("bcryptjs")
require("dotenv").config({path: "./src/config/.env"}); 
const authentifictionCotroler = require("../auth/authentifcationControler.js") 

const getUser = async (req ,res)=>{
    try{
        if(req.usetId){
            let users = await userModel.getAllUsers();
            res.json = users ; 
        }
        else{
            res.status(401).json({message: "merci de vous authentifier"});
        }
    }
    catch(err){
        res.status(501).json(err); 
    }
}

const signIn = 

signUp 



 
