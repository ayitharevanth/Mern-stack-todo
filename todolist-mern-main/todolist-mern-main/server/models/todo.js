const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    date: {
      type: Date,
    },
    priority: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;
