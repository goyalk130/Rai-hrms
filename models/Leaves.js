const { default: mongoose } = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["sick", "vacation", "other"], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    reason: { type: String, required: true },
  },
  { timestamps: true }
);

const Leave = mongoose.model.Leave || mongoose.model("Leave", leaveSchema);
module.exports = Leave;
