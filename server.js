const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const connectDb=require('./config/db')
dotenv.config({ path: "./config.env" });
app.use(bodyParser.urlencoded({ extended: true }));
const port=process.env.PORT||5000
app.listen(port, ()=>{console.log(`Server running on port ${port}`)})
connectDb()
app.use(cors());
app.use(express.json());
const userRouter =  require('./routes/user.route')
const adminRouter =  require('./routes/admin/admin.route')
const postRouter =  require('./routes/post.route')
const catRouter =  require('./routes/category.route')
// const categoryRouter =  require('./routes/category.route')
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/posts', postRouter)
app.use('/categories', catRouter)