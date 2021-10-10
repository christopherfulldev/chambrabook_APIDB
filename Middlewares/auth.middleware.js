const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
    const token = request.get("Authorization");
    //console.log(token);
    if(!token) { 
        response.status(401).json({msg: "Request without token"})
    }; 
    const tokenWithoutBearer = token.slice("")[0];
    try {
        const decodedToken = jwt.verify(
            tokenWithoutBearer,
            process.env.SECRET_JWT,
        );
        request.user = {... decodedToken};
        next();
    } catch (error) {
        response.status(401).json({msg: "Not Authorized", error})
    }
}

module.exports = auth;