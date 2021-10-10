const Match = require("../Models/Match.model");

exports.matchAdder = async(request, response, next) => {
    const {id} = request.params;
    try {
        await Match.create(id);
        reponse.status(201).json({msg:"Match created"});
    } catch (error) {
        reponse.status(500).json({msg:"Match not created. Sorry. Try again!", error:error.message});
    };
};

exports.matchFinder = async (request, response, next) => {
    const {id} = request.params;
    try {
        const matchFinded = await Match.findById(id);
        response.status(201).json(matchFinded);
    } catch (error) {
        response.status(500).json({msg: "Match not found, try again", error:error.message});
    };
};
