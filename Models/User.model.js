const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: String,
    userName: {type: String, 
        unique: true,
        required: [true, "User name is required"],
        //trim: true
    },
        age: {type: String},
        albuns: [{type: Schema.Types.ObjectId, 
        ref: "Album"}],
    profilePhoto: {type: String,},
    friendsList: {type: Schema.Types.ObjectId, 
        ref: "Friend"},
        name: {type: String, 
        required: true},
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
    phoneNumber: {type: Number},
    matchList: [{type: Schema.Types.ObjectId, ref: "Match"}]                           
},{
    timestamps:true
});

module.exports = model("User", userSchema);



