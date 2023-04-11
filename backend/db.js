const mongoose = require('mongoose')
const db = "mongodb+srv://rohith:181589208%40Grk.@cluster0.k6su2aq.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(db)
    .then(()=>
        console.log("connected to mongo succesfully")
    )
}

module.exports = connectToMongo