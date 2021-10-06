const {Router} = require("express");
const router = Router();
const userController = require("../Controller/User.controller");


router.post("/", userController.userAuth);
router.post("/register", userController.createUser);
//router.post("/login", userAuth)

module.exports = router;