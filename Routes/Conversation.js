const {Router} = require("express");
const router = require("express");

const conversationController = require("../Controller/Conversation.controller");

router.post("/conversation", conversationController.newConversation);
router.get("/conversation/:userId", conversationController.conversationRecuperator);
router.get("/conversation/find/:firstUserId/:secondUserId", conversationController.conversationBetweenUsersRecuperator);

module.exports = router;