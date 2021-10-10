const User = require("../Models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//autenticação de usuario 
exports.userAuth = async (request, response, next) => {
    const {username, password} = request.body;
    try {
        const user = await User.findOne({username});
        if (!user) {
            throw new Error("Invalid username");
           };
        const compareHash = bcrypt.compareSync(password, user.passwordHash);
        if(!compareHash){
            throw new Error({msg:"Password incorrect", error:error.message});
        };
        const payload = {
            id: user.id,
            username: user.userName
        };
        console.log(payload);
        const token = jwt.sign(
            payload,
            process.env.SECRET_JWT,
            {expiresIn: '1day'}
        );
        response.status(200).json({payload, token});    
        console.log(token, payload);
    } catch (error) {
        response.status(400).json({msg:"msg: Error while creating user, try again.", error:error.message});
    };
}

//cria usario no banco
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

//encontrar um usuario
exports.UserFinder = async (request, response, next) => {
    const {id} = request.params;
    try {
        const findUser = await User.findOne(id);
        response.status(200).json(findUser);
    } catch (error) {
        response.status(500).json({msg: "User not found, check informations and try again", error:error.message});
    }
}

//upload de informações de usuario
exports.userUpdater = async (request, response, next) => {
    const {id} = request.params;
    const payload = request.body;
    try {
        const userUpdate = await User.findByIdAndUpdate({_id:id}, payload, {new: true})
        reponse.status(200).json(userUpdate);
    } catch (error) {
        response.status(500).json({msg:"Error while update, try again", error:error.message});
    }
};

//deleta um usuario no banco
exports.userDelete = async (request, response, next) => {
    const {id} = request.params;
    try {
        await User.findByIdAndDelete(id);
        response.status(204).json();    
    } catch (error) {
        response.status(500).json({msg:"Failed to delete, try again.", error:error.message});
    }
}


