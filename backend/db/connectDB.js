const mongoose = require('mongoose')

mongoose
    .connect(process.env.ATLAS_URI,{})
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(`DB connectn error - ${err} `))

