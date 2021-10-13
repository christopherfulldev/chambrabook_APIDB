const {Schema, model} = require("mongoose");

const friendsListSchema = new Schema ({
    friendList:[{type: Schema.Types.ObjectId, ref: "User"}]
});

module.exports = model("Friendslist", friendsListSchema);
