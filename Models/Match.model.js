const {
    Schema,
    model
} = require("mongoose");

const matchSchema = new Schema({
    profileID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = model("Match", matchSchema);