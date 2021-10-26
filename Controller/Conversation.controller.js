const Conversation = require("../Models/Conversation.model");

//inicia novo chat
exports.newConversation = async (request, response, next) => {
    const conversation = new Conversation({
        members: [request.body.senderId, request.body.receiverId]
    });
    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        throw new Error("Error while save conversation");
    }
};

//encontra conversas salvas
exports.conversationRecuperator = async (request, response, next) => {
    try {
        const recoveredConversation = await Conversation.find({
            members: {$in: [request.params.userId] }
        });
        response.status(200).json(recoveredConversation);
    } catch (error) {
        throw new Error("Error while recovering messages");
    };
};

//encontra conversa entre usuarios
exports.conversationBetweenUsersRecuperator = async (request, response, next) => {
    try {
        const recoveredConversationBetweenUsers = await Conversation.findOne({
            members: {$all: [request.params.firstUserId, request.params.secondUserId]}
        });
        response.status(200).json(recoveredConversationBetweenUsers);
    } catch (error) {
        throw new Error("Error while recovery messages");
    };
};






