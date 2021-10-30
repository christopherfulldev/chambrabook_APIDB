const {
    Schema,
    model
} = require("mongoose");

const MessageSchema = new Schema({
    conversationID: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
})

module.exports = model("Message", MessageSchema);