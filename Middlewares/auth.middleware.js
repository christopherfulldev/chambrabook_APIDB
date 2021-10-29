const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
    const token = request.headers.authorization;
    if(!token) { 
        response.status(401).json({msg:"Request without token"});
    }; 
    const tokenWithoutBearer = token.split(" ")[1];
    try {
        console.log(process.env.SECRET_JWT);
        const decodedToken = jwt.verify(
            tokenWithoutBearer,
            process.env.SECRET_JWT,
        );
        request.user = {... decodedToken};
        next();
    } catch (error) {
        response.status(401).json({msg:"Not Authorized, try again"});
    }
}

module.exports = auth;