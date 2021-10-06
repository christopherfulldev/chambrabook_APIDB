const {Schema, model} = require("mongoose");

const albumSchema = new Schema ({
    photos: [{type: String}]
})

module.exports = model("Album", albumSchema);