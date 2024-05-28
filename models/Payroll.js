const { default: mongoose } = require("mongoose");

const payrollSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "paid"], default: "pending" },
  },
  { timestamps: true }
);

const Payroll =
  mongoose.model.Payroll || mongoose.model("Payroll", payrollSchema);
module.exports = Payroll;
