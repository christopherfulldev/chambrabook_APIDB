const Friend = require("../Models/Friend.model");

//adiciona um amigo
exports.friendAdder = async (request, response, next) => {
    const {
        id
    } = request.params;
    try {
        await Friend.create({
            id
        });
        reponse.send(201).json({
            msg: "Friend has been add"
        });
    } catch (error) {
        response.send(500).json({
            msg: "Error while add friend, try again",
            error: error.message
        });
    }
};

//encontra um amigo
exports.friendFinder = async (request, response, next) => {
    const {
        id
    } = request.params;
    try {
        const findedFriend = await Friend.findById(id)
    } catch (error) {
        reponse.send(500).json({
            msg: "Error while find friend, try again",
            error: error.message
        });
    }
};

//deleta um amigo
exports.friendDeleter = async (request, response, next) => {
    const {
        id
    } = request.params;
    try {
        await Friend.findByIdAndDelete(id);
        reponse.status(200).json({
            msg: "Friend sucessefull deleted"
        });
    } catch (error) {
        reponse.status(200).json({
            msg: "Error while delete friend, try again",
            error: error.message
        })
    }
};
