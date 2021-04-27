const express = require("express"); 

const router = express.Router(); // pour utiliser le router de express 
const api_routes = require ("./api.js") // les routes de notre api 

router.use("/api",api_routes);


module.exports = router ; 