const express = require("express");
const router = express();
const bodyParser = require("body-parser");

router.use(bodyParser.json()); //???convert to json
router.use(bodyParser.urlencoded({ extended: true })); //???
router.use(express.static("public"));

const postController = require("../controllers/postController");

router.post("/creatPost", postController.createPost);

router.get("/getPost", postController.getPosts);

router.get("/deletePost/:id", postController.deletePosts);

router.put("/updatePost/:id", postController.updatePosts);

module.exports = router;
