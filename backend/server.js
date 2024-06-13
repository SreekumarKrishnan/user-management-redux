import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
dotenv.config()


connectDB()


const port = process.env.PORT || 5000

const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cookieParser())

app.use('/api/users', userRoutes)

app.get( '/', (req,res)=> res.send('Server is ready'))

app.use(notFound)
app.use(errorHandler)

app.listen( port, ()=> console.log(`server started at http://localhost:${port}`))