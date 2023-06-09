import jwt  from "jsonwebtoken";

export const checkAuth = (req,res,next)=> {
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json('no token found')
    }
    jwt.verify(token,process.env.JWT_SECRET, (err,payload)=>{
        if(err) {
            return res.status(403).json('invalid token')
        }
        req.user = {
            id:payload.id
        }
        next()
    })
}