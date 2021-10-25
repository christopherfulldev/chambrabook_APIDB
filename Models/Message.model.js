const mongoose = require("mongoose");

const MessageSchema = ({
    conversationID: {type: String},
    sender:{type: String},
    text:{type: String}
})

module.exports = model("Message", MessageSchema);