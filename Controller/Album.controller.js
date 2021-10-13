const Album = require("../Models/Album.model");

//adiciona um album
exports.albumAdder = async (request, response, next) => {
    if (!req.body.title) {reponse.status(400).json({msg:"Tilte is required"})};
    try {
        const addedAlbum = await Album.create(req.body.title);
        response.send(201).json(addedAlbum);
    } catch (error) {
        reponse(500).json({msg:"Error while create album, try again", error:error.message});
    };
};

//rotas que devolvem os albuns (o)
exports.albumFinderOne = async (request, response, next) => {
    const {id} = request.params;
    try {
        const albumFinded = await Album.findById(id);
        reponse.status(200).json(albumFinded);
    } catch (error) {
        reponse.status(500).json({msg:"Album not find, try again", error:error.message});
    };
};

exports.albumFinderAll = async (request, response, next) => {
    try {
        const albumFinded = await Album.findOne();
        reponse.status(200).json(albumFinded);
    } catch (error) {
        reponse.status(500).json({msg:"Album not find, try again", error:error.message});
    };
}

//rotas que atualizam os albuns (o)
exports.albumUpdater = async (request, response, next) => {
    const {id} = request.params;
    try {
        const albumUpdated = await Album.findByIdAndUpdate(id);
        reponse.status(200).json({albumUpdated});
    } catch (error) {
        response.status(500).json({msg:"Error while update, try again", error:error.message});
    };
};

//rotas que deletam albuns
exports.albumDeleter = async (request, response, next) => {
    const {id} = request.params;
    try {
        await Album.findByIdAndDelete(id);
        response.status(200).json({msg:"Album deleted"});
    } catch (error) {
        reponse.status(500).json({msg:"Error while delete, try again", error:error.message});
    };
};