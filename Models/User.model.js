const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: {type: String},
    lastName:{type: String, 
        required: true},
    userName: {type: String, 
        unique: true,
        required: [true, "User name is required"],
        trim: true,
        min: 3,
        max: 20},
        age: {type: String},
    albuns: [{type: Schema.Types.ObjectId, 
        ref: "Album"}],
    friendsList: {type: Schema.Types.ObjectId, 
        ref: "Friend"},
    passwordHash: {
        type: String,
        required: [true, 'Password is required.']
    },
    email: {type: String, 
        required: [true, "Email is required"],
        unique: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        trim: true,
        lowercase: true
    },
    profilePhoto: {type: String, 
        default: "" },
    phoneNumber: {type: Number},
    followers: {type: Array, 
        default: [] },
    following: {type: Array, 
        default:[] },
    albumList: [{type: Schema.Types.ObjectId, 
        ref:"Album"}],
    matchList: [{type: Schema.Types.ObjectId, 
        ref: "Match"}]                           
},{
    timestamps:true
});

module.exports = model("User", userSchema);



