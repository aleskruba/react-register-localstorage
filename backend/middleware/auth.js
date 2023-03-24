const jwt  = require("jsonwebtoken");


module.exports = function (req,res,next) {
   const token = req.header("Authorization")

   if (!token) return res.status(401).send("Acces denied, token not found")

    try {
        const user =  jwt.verify(token,process.env.JWTSECRET)
        req.user = user 
        next()
            }
    catch(error) {
        res.status(400).send("Invalid token")
    }
 
}