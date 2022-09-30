const mongoose=require('mongoose')
const roleSchema=new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        
    },
    description: {
        type: String,
        required: true,
        enum: ['userRole','adminRole'],
        
        
    },
    
   
},
{
    timestamps: true

})

module.exports=mongoose.model('Role',roleSchema)