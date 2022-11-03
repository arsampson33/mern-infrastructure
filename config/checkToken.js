const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    //Checks for the token being sent in a a header or query param
    let token = req.get('Authorization') || req.query.token;
        if(token){
        //Remove the Bearer if it was include in header
        token = token.replace('Bearer ', '')
        //Check if token is valid
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            //if valid decoded will be the tokens entire paylod
            //else err will be send
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
            return next()
        })
    } else {
        req.user = null
        return next()
    }
}