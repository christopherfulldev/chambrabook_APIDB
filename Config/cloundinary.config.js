const cloudinary = require("claudinary").v2;
const {CloudinaryStorage} = require("multer-store-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDNARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage ({
    cloudinary,
    params: {
        folder: "ChambraBook_APIDB"
    }
});

const uploadFile = multer({storage});

module.exports = uploadFile;