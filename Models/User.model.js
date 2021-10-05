const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    userName: {type: String, 
        unique: true,
        required: true},
    age: {type: Number},
    albuns: [{type: Schema.Types.ObjectId, 
        ref: "Album"}],
    profilePhoto: {type: String, 
        required:true},
    friendsList= [{type: Schema.Types.ObjectId, 
        ref: "Friend"}],
    name: {type: String, 
        required: true},
    password: {type: String, 
        required: true, 
        unique: true,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$ /},
    email: {type: String, 
        required: true, 
        unique: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/},
    phoneNumber: {type: Number},
    matchList: [{type: Schema.Types.ObjectId, ref: "Match"}]                           
},{
    timestamps:true
});

module.exports = model("User", userSchema);



