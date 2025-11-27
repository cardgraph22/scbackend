import { Schema } from "mongoose"

export const userSchema = new Schema({
  userid: String,
  username: String,
  email: String,
  password: String,
  imagename: String
});