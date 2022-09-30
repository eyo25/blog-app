const mongoose=require('mongoose')
const catagorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add catagory  name'],
      },
    discription: {
        type: String,
        required: [true, 'Please add catagory  discription'],
      },
    slug: {
        type: String,
        required: [true, 'Please add catagory  slug'],
      },
      posts:[{
        type: mongoose.Types.ObjectId,
        ref: "Post",
        required: false,
       
    }],
    
   
},
{
    timestamps: true
}
)