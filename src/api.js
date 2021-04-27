const express = require("express")
const api_router = express.Router(); 

const user_router = require("./routers/user_router.js");
const post_router = require("./routers/post_router.js"); 


api_router.use("/user", user_router);
user_router.use("/posts",post_router); 

module.exports = api_router;