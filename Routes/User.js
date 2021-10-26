const uploadFile = require("../Config/cloundinary.config");
const userController = require("../Controller/User.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

const {Router} = require("express");
const router = Router();
//rotas de autenticação e registro de usuario
router.post("/register", userController.createUser);
router.post("/login", userController.userAuth);

//rotas referente a opções com usuario
router.delete("/user/:id", authMiddleware, userController.userDelete);
router.put("/user/:id", authMiddleware, userController.userUpdater);
router.get("/user/finder/:id", authMiddleware, userController.userFinder);
router.patch("/user/uploadpicture/", uploadFile.single("image"), async()=>userController.profilePicUploadernpm);

module.exports = router;
