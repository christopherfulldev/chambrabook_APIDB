const {Schema, model} = require("mongoose");

const albumSchema = new Schema ({
    photo: [{type: String}]
})

module.exports = model("Album", albumSchema);