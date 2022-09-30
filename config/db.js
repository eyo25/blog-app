const mongoose=require('mongoose')
const dbconn= async()=>{
    try {
        const conn= await mongoose.connect(process.env.mongoURI,{ useUnifiedTopology:true,
        useNewUrlParser: true,
        }) 
        console.log('Mongodb connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports=dbconn