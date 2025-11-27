import mongoose from "mongoose"
import { startMongo } from "$lib/api/mongo";
import { userSchema } from "$lib/api/schemas";

startMongo().then(() => {
  console.log('hooks.server,js - mongoose started test')
})

export let User = mongoose.models.User || mongoose.model('User', userSchema);
