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
            throw new Error("Password incorrect");
        };
        const payload = {
            id: user.id,
            username: user.userName
        };
        const token = jwt.sign(
            payload,
            process.env.SECRET_JWT,
            {expiresIn: '1day'}
        );
        response.status(200).json({payload, token});    
    } catch (error) {
        response.status(400).json({msg:"Error while log user, try again.", error:error.message});
    };
}

//cria usario no banco
exports.createUser = async (request, response, next) => {
    const {name, password, userName, confirmPassword, email, age, phoneNumber, profilePhoto} = request.body;
    try {
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
exports.userFinder = async (request, response, next) => {
    const {username} = request.params;
    if(!username){
        throw new Error("Username is required, insert one and try again");
    }
    try {
        const foundUser = await User.findOne({username});
        const {name, userName, age, profilePhoto, email, phoneNumber} = foundUser;
        response.status(200).json({name, userName, age, profilePhoto, email, phoneNumber});
    } catch (error) {
        response.status(500).json({msg: "User not found, check informations and try again", error:error.message});
    }
}

//upload de informações de usuario
exports.userUpdater = async (request, response, next) => {
    const {id} = request.params;
    const payloadToUpdate = request.body;
    try {
        const userUpdate = await User.findByIdAndUpdate(id, payloadToUpdate, {new: true})
        response.status(200).json({msg:"User sucessefull updated", username:`${payloadToUpdate.username}`});
    } catch (error) {
        response.status(500).json({msg:"Error while update, try again", error:error.message});
    }
};

//deleta um usuario no banco
exports.userDelete = async (request, response, next) => {
    const {id} = request.params;//bonus add func que encontra e deleta as referencias
    try {
        await User.findByIdAndDelete(id);
        response.status(204).json({msg:"User sucessefull deleted"});    
    } catch (error) {
        response.status(500).json({msg:"Failed to delete, try again.", error:error.message});
    }
}

//upload profile imagem
exports.uploadPicture = async (request, response, next) => {
  const { path: url="" } = request.file;
  const {title} = request.body;
  const { id, username } = request.user;
  try {
    const updateProfilePicUser = await User.findByIdAndUpdate(
        id, {$push: { profilePicture: path }}, { new: true });
    res.status(200).json(updateProfilePicUser);
  } catch (error) {
    res.status(500).json(error);
  } 
  await Album.create({user:_id, url, title});
};


