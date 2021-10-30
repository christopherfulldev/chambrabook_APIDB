const {
    Router
} = require("express");
const router = Router();
const albumController = require("../Controller/Album.controller");

//rotas referente a opções com album
router.post("/album/:id", albumController.albumAdder);
router.get("/album/:id", albumController.albumFinderAll);
router.put("/album/:id", albumController.albumUpdater);
router.delete("/album/:id", albumController.albumDeleter);

module.exports = router;