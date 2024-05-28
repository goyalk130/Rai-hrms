const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['super_admin', 'admin', 'HR', 'employee'], required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  leaves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Leave' }],
  salary: { type: Number, required: true }
}, { timestamps: true });

const User = mongoose.models.User  || mongoose.model('User', userSchema) 
module.exports = User;
