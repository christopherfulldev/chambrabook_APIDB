const {
    Schema,
    model
} = require("mongoose");

const albumSchema = new Schema({
    title: String,
    photos: [{
        type: String
    }]
})

module.exports = model("Album", albumSchema);