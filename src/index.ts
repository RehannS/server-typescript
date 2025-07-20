import express from 'express'
import postRoutes from './routes/post.route';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger';
const app= express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));