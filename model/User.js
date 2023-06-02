const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const userSchema = new mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    maxLength: 320,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: { type: String, required: true, maxLength: 30 },
  phone: { type: Number, min: 1000000000, max: 9999999999 },
  createAt: { type: Date, default: Date.now },
});

// mongoose.model("collection Name", schema)
const Users = mongoose.model("users", userSchema);
module.exports = Users;
