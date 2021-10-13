const {Router} = require("express");
const router = Router();
const userController = require("../Controller/User.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

//rotas de autenticação e registro de usuario
router.post("/register", userController.createUser);
router.post("/login", userController.userAuth);

//rotas referente a opções com usuario
router.delete("/user/:id", authMiddleware, userController.userDelete);
router.put("/user/:id", authMiddleware, userController.userUpdater);
router.get("/user/finder", authMiddleware, userController.userFinder);

module.exports = router;