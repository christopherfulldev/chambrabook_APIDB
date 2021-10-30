const {
    Router
} = require("express");
const router = Router();
const matchController = require("../Controller/Match.controller");

//rotas referente a opções com match
// router.get(/match/:id, matchController.matchAdder);
router.post("/match/username", matchController.matchFinder);

module.exports = router;