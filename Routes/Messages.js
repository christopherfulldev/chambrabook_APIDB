const {Router} = require("express");
const router = Router();

const MessageController = require("../Controller/Message.controller");

router.post("/sendmessage", MessageController.writeNewMessage);
router.get("/sendmessage/:conversationId", MessageController.usersConversationRecuperator);

module.exports = router;