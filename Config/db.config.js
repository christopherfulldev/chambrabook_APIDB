const mongoose = require("mongoose");

const connect = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUlrParser: true,
        useUnifiedTopology: true
    });
    console.log(`Data Base Connected: ${connection.connections[0].name}`);
}

module.exports = connect;