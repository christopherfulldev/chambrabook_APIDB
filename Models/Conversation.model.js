const {Schema, model} = require("mongoose");

const ConversationSchema = ({
    conversationID: {type: String},
    sender:{type: String},
    text:{type: String}
})

module.exports = model("Conversation", ConversationSchema);