const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    default: null,
  },
  degree: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmHash: {
    type: String
  },
  tasks: [{ type: Types.ObjectId, ref: "Link" }],
});

module.exports = model("User", userSchema);
