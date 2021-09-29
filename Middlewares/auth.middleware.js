const jwt = require("jonsonwebtoken");

const auth = (require, response, next) => {
    const token = require.get("Autorization");
    !token && reponse.status(401).json({message: "Request without token"}); 

    const tokenWithoutBearer = token.subString(6);

    try {
        const decodedToken = jwt.verify(
            tokenWithoutBearer,
            process.env.Secret_JWT
        );

        request.user = {... decodedToken};
        next();

    } catch (error) {
        response.status(401).json({message: "Not Authorized", error})
    }
}

module.exports = auth;