const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userRole: { type: String, enum: ["user", "admin"], default: "user" },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  currentlyReading: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  wantToRead: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  verificationToken: { type: String },
  refreshToken: { type: String },
});

const User = model("User", userSchema);
module.exports = User;
