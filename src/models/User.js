const mongoose = require('mongoose');

// 定义User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3 // 用户名最小长度（用于“合适用户名”筛选）
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  // 可扩展其他字段（如email、age等）
  email: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // 自动添加createdAt/updatedAt字段
});

// 导出User模型（确保与Employees使用同一数据库连接）
const User = mongoose.model('User', userSchema);
module.exports = User;