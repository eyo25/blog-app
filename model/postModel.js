const  mongoose  = require("mongoose")
const postSchema=new mongoose.Schema({
    thumbnail:{
        type:String,
        required: [true, 'Please add image url']
    },
    title:{
        type:String,
        required: [true, 'Please add title']
    },
    slug:{
        type:String,
        required: [true, 'Please add slug']
    },
    Description:{
        type:String,
        required: [true, 'Please add title']
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Categories",
        required: true,
      
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: false,
      
        

    },
},
{
    timestamps: true
})

module.exports=module.model('Post', postSchema)