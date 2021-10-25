const {Router} = require("express");
const router = Router();

const postController = require("../Controller/Post.controller");

router.post("/post", postController.newPost);
router.put("/post/:id", postController.postUpdater);
router.delete("/post/delete/:id", postController.postDeleter);
router.put("/post/like/:id", postController.inputLikePost);
router.get("/post/find/:id", postController.postFinder);
router.get("/post/timeline/:userId", postController.postTimeLineFinder);
router.get("post/profile/:username", postController.postFinderAll);

module.exports = router;
