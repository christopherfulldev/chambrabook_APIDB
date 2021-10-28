const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDNARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});

const storage = new CloudinaryStorage ({
    cloudinary,
    params: {
        folder: "ChambraBook_APIDB",
        resource_type: "image"
    }
});

const storagePhotos = new CloudinaryStorage ({
    cloudinary,
    params: {
        folder: "ChambraBook_APIDB_photos",
        resource_type: "image"
    }
});

const uploadFile = multer({storage});
const uploadPhoto = multer({storage});
module.exports = {uploadFile, uploadPhoto};

