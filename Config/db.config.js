const mongoose = require("mongoose");

const connect = (async () => { //porque sempre quero ativar o DB, utilizada IIFE 
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
})();
