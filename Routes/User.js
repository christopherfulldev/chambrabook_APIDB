const {uploadFile, uploadPhoto} = require("../Config/cloundinary.config");
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
router.get("/user/finder/:username", authMiddleware, userController.userFinder);
router.patch("/user/uploadpicture/", uploadFile.single("file"), userController.uploadPicture);
router.patch("/user/uploadphoto", uploadPhoto.single("file"), userController.updatePictureAlbum);
router.delete("/user/:username/deletephoto", authMiddleware, userController.deletePicture);
router.delete("/user/:username/deletephoto/photo", authMiddleware, userController.deleteAlbumPhoto);

module.exports = router;
