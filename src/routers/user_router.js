const express = require('express');
const user_router = express.Router() ; 

const user_controlle = require("../controllers/user_controlle.js");
const friend_controlle = require("../controllers/friend_controlle.js");
const authentificationMiddleware = require("../middlewares/authentificationMiddleware.js");


user_router.post("/signUp", user_controlle.signUp); 
user_router.post("/singIn",user_controlle.signIn); 
user_router.get("/",authentificationMiddleware, user_controlle.getUser);

user_router.post("/friend",authentificationMiddleware, friend_controlle.addFriend );
user_router.delete("/friend",authentificationMiddleware,friend_controlle.deleteFriend); 



module.exports = user_router; 