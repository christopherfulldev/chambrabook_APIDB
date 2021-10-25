const Message = require("../Models/Message.model");

//nova menssagem
exports.writeNewMessage = async (request, response, next) => {
    const newMessage = new Message(request.body);
    try {
        savedMessage = await newMessage.save();
        response.status(200).jsons(savedMessage);
    } catch (error) {
        throw new Error("Error while save message");
    };
};

//recupera messagem
exports.usersConversationRecuperator = async (request, response, next) => {
    try {
        const recoverdMessage = await message.find({
            conversationId: request.params.conversationId
        });
        response.status(200).json(recoverdMessage)
    } catch (error) {
        throw new Error("Error while recover message");
    };
};
