const { Schema, model, Types } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Описания нет.",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expiredAt: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  importance: {
    type: String,
    default: "0",
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Task", taskSchema);
