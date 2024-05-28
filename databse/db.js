const { default: mongoose } = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("db connected")
    }).catch((e)=>{
        console.log(e)
    })
}

export default connectDB