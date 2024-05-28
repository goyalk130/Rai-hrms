const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
module.exports = Task;
