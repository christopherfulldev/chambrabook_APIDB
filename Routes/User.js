const {Router} = require("express");
const router = Router();
const userController = require("../Controller/User.controller");



router.post("/register", userController.createUser);
router.post("/login", userController.userAuth);
//router.post("/login", userController.userAuth);

module.exports = router;