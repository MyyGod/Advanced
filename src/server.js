const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// 导入自定义中间件和路由
const requestArrivalTime = require('./middlewares/requestArrivalTime');
const userRoutes = require('./routes/userRoutes');
// 原有employees路由（如果存在）
// const employeeRoutes = require('./routes/employeeRoutes');

// 加载环境变量
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

// 核心：只声明1次app变量！
const app = express();
const PORT = process.env.PORT || 5000;

// 全局中间件
app.use(express.json()); // 解析JSON请求体
app.use(requestArrivalTime); // 请求时间中间件

// 挂载路由
app.use('/api/users', userRoutes);
// app.use('/api/employees', employeeRoutes); // 如有employees路由则保留

// 连接数据库并启动服务
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log('MongoDB 连接成功');
    app.listen(PORT, () => {
      console.log(`服务运行在 http://localhost:${PORT}（环境：${process.env.NODE_ENV || 'dev'}）`);
    });
  })
  .catch(err => {
    console.error('MongoDB 连接失败：', err.message);
    process.exit(1);
  });