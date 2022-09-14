const jwt = require("jsonwebtoken")

const authentication = async  function (req, res, next) {
    try {
        const token = req.headers['x-api-key']
        if (!token)
            return res.status(403).send({ status: false, msg: "Missing authentication token request" })

            const bearer = token.split(' ');
            const newtoken = bearer[1];
       const decodedToken =  jwt.verify(newtoken, 'auction')
       if (!decodedToken){
           res.status(403).send({status:false,msg:"invalid authentication request"})
           return
       }
       //res.setHeader("x-api-key", token);
       req.userId = decodedToken.userId;
       next()
    }catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}
module.exports.authentication=authentication