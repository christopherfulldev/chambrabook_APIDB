const cloudnary = require("claudinary").v2;
const {ClaudinaryStorage} = require("multer-store-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLAUDINARY_NAME,
    api_key: process.env.CLOUDNARY.KEY,
    api_secret: process.env.CLAUDINARY_SECRET
});

const storage = new ClaudinaryStorage ({
    cloudinary,
    params: {
        folder: "ChambraBook_APIDB"
    }
});

const uploadFile = multer ({storage});

module.exports = uploadFile;