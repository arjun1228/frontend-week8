import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { userRoute } from './API/UserAPI.js'
import cors from 'cors'

// Read environment variables (root .env lives one level up from BackEnd)
// Use fileURLToPath to produce a correct filesystem path on Windows
const envPath = fileURLToPath(new URL('../.env', import.meta.url))
config({ path: envPath })
console.log('dotenv path:', envPath)
console.log('DB_URL after dotenv load:', process.env.DB_URL)



const app = exp()
//body parser middleware
app.use(exp.json())

// enable CORS for development front-end (adjust origin as needed)
app.use(cors({
  origin:['http://localhost:5173']
}))


//connect API
app.use('/user-api', userRoute)

//connect DB (use defaults if env vars missing)
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/UserManagementDb'
const PORT = process.env.PORT || 4000

const connectDB = async () => {
  try {
    await connect(DB_URL)
    console.log('DB Connection Success')
    //start the server
    app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))
  } catch (err) {
    console.log('error in DB connection', err)
  }
}
connectDB()

//error parsing middleware
app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Extra-field strict mode error
  if (err.name === "StrictModeError") {
    return res.status(400).json({
      message: "Unexpected field in request",
      details: err.message,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});
