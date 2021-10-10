const {Router} = require("express");
const router = Router();
const albumController = require("../Controller/Album.controller");

//rotas referente a opções com album
router.delete();
router.put();
router.get();
router.post();

module.exports = router;