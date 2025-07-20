import express from 'express'
import postRoutes from './routes/post.route';
const app= express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

app.use(express.json());
app.use('/posts', postRoutes);