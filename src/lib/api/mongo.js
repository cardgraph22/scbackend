import mongoose from "mongoose"
mongoose.set('strictQuery', false);

////  use this for local development
//import { MONGODB_URL } from '$env/static/private'

//  use this for vercel
let MONGODB_URI = process.env.MONGODB_URI;
console.log('mongo.js, enter')
export async function startMongo() {
  console.log('mongo.js, connect to db')
  //mongoose.connect(MONGODB_URL)
  console.log('mongo.js, try to connect')
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('connected to mongoose')
  } catch (e) {
    console.log('Error connecting to server')
    console.log(e)
  }
}