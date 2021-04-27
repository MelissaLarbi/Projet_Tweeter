const express = require("express"); 
const post_router = express.Router(); 
const post_controlleur = require("../contollers/posts_controller"); 
const comment_controlleur = require("../controllers/commenter_controlle"); 

cont authentification_middleware = require("../middlewares/authentificationMiddleware"); 


// la creation d'un post 
post_router.post("/",authentification_middleware, post_controlleur.add_posts);
// recuperer un post 
post_router.get("/",authentification_middleware,post_controlleur.get_posts);

// supprimer un post
post_router.delete("/:id", authentification_middleware, post_controlleur.delete_post);
// modifier un post 
post_router.put("/:id", authentification_middleware, post_controlleur.update_post);


// liker un post 
post_router.post("/:id/like",authentification_middleware, post_controlleur.like_post);
// commenter un post 
post_router.post("/:idpost/commente",authentification_middleware,post_controlleur.commente_post);


// modifier un commentaire 
post_router.put("/:idpost/comment/:idcomment", authentification_middleware, comment_controlleur.updata_commente); 
// supprimer un commentaire 
post_router.delete("/:idpost/comment/:idcomment", authentification_middleware, comment_controlleur.delete_comment);


module.exports = post_router;