const User = require("../Models/User.model");
const bcrypt = require("bcryptjs");

exports.userAuth = async (request, response, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('invalid user name');
    }

}

exports.createUser = async (request, response, next) => {
    const {name, password, userName, confirmPassword, email, age, phoneNumber, profilePhoto} = request.body
    try {
        //const userValidation = await User.findOne({userName});
        // if (userName){tratamento não necessario porque o valor da chave é tido como unique no model
        //     throw new Error("User name alredy exists"); 
        // }
        const salt = await bcrypt.genSalt(8);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            name,
            passwordHash, 
            userName, 
            email, 
            age,
            profilePhoto,
            phoneNumber});
        response.status(201).json({userName: newUser.userName});
    } catch (error) {
        response.status(500).json({
            msg: "Error while creating user, try again", 
            error:error.message})
    };
}

exports.userLogin = async (request, response, next) => {
    
}
