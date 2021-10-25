const Post = require("../Models/Post.model");
const User = require("../Models/User.model");

//cria um post
exports.newPost = async (request, response, next) => {
    const newPostMaker = new Post(request.body);
    try {
        const saveNewPost = await newPost.save();
        response.status(200).json(saveNewPost);
    } catch (error) {
        throw new Error("Error while save post");
    };
};

//atualiza um post
exports.postUpdater = async (request, response, next) => {
    try {
        updatedPost = await Post.findById(request.params.id);
        if (post.userId === request.body.userId){ 
            await post.updateOne({$set: request.body})
            reponse.status(200).json("The post has been updated");
    } else {
        throw new Error("Error while save post");}
    } catch (error) {
        throw new Error("Error while save post");
    };
};

//deleta um post
exports.postDeleter = async (request, response, next) => {
    try {
        const poster = await Post.findById(request.params.id);
        if(poster.userId === request.body.userId){
            await post.deleteOne();
            response.status("The post has been deleted")
        } else {
            throw new Error("Error while delete post");
        }
    } catch (error) {
        throw new Error("Error while save post");
    };
};

//Insere/exclui like
exports.inputLikePost = async (request, response, next) => {
    try {
        const post = await Post.findById(request.params.body);
        if(!post.likes.includes(request.params.bodu)) {
            await post.updateOne({$push: {likes: request.body.userId}});
            response.status(200).json("The post has been liked");
        } else {
            await post.updateOne({$pull: {likes: request.body.userId}});
            response.status(200).json("The post has been disliked");
        };
    } catch (error) {
        throw new Error("Error, try again");
    };
};

//encontra um post
exports.postFinder = async (request, response, next) => {
    try {
        const post = await Post.findById(request.params.id);
        response.status(200).json(post);
    } catch (error) {
        throw new Error("Error, try again");
    };
};

//encontra post na timeline
exports.postTimeLineFinder = async (request, response, next) => {
    try {
        const currentUser = await User.findById(request.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendsPosts = await Promisse.all(
            currentUser.followings.map((friendId) => {
                return Post.find({userId: friendId});
            })
        );
        response.status(200).json(userPosts.concat({...friendsPosts}));
    } catch (error) {
        throw new Error("Error, try again");
    };
};

//encontra todos os posts de um usuario
exports.postFinderAll = async (request, response, next) => {
    try {
        const user = await User.findOne({username: request.params.username});
        const userAllPosts = await Post.find({userid: user._id})
        reponse.status(200).json(userAllPosts);
    } catch (error) {
        throw new Error("Error, try again");
    };
};