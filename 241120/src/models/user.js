import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { type } from "express/lib/response";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatarUrl: String,
  socialOnly: {
    type: Number,
    default: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
});

// 스키마가 세이브 되기 전에
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;
