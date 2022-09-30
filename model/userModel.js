const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({ 
    first_name: {
        type: String,
        required: [true, 'Please add your first  name'],
      },
      last_name: {
        type: String,
        required: [true, 'Please add your last  name'],
      },
      email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
      },
      password: {
        type: String,
        required: [true, 'Please add a password'],
      role_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Role',
      },
      
      
},
posts:[{
  type: mongoose.Types.ObjectId,
  ref: "Post",
  required: false,

}]


},
{
timestamps: true
} 
)

module.exports = mongoose.model('User', userSchema)