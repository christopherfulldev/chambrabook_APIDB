const {Router} = require("express");
const router = Router();
const userController = require("../Controller/User.controller");

//rotas de autenticação e registro de usuario
router.post("/register", userController.createUser);
router.post("/login", userController.userAuth);

//rotas referente a opções com user
router.delete("/user:id", userController.userDelete);
router.put("/user:id", userController.userUpdate);
router.get("user/:id", userController.UserFinder);

module.exports = router;