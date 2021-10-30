const {
    Schema,
    model
} = require("mongoose");

const imageSchema = new Schema({
    image: {
        data: Buffer,
        Type: String
    }
})