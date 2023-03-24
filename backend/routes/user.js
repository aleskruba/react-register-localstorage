const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt  = require("jsonwebtoken");
const auth = require("../middleware/auth")

router.get("/",auth, async (req,res)=>{
   const profile = await User.findById(req.user._id)
    res.send(profile)
})

// Register User
router.post("/", async (req, res) => {
    const { email, name, password } = req.body;

    // Checking User
    let user = await User.findOne({ email });
    if (user) return res.status(400).send("User already exists");

    // Save User Into Database
    user = new User({ email, name, password });
    await user.save();

    const jwtData = {_id:user._id, name:user.name}
    const token = jwt.sign(jwtData,process.env.JWTSECRET,
            {expiresIn:"2h"})

    res.send(token);
});

module.exports = router;