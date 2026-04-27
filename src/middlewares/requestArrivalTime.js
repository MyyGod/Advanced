/**
 * 中间件：添加请求到达服务的时间到响应头
 * @param {Request} req Express请求对象
 * @param {Response} res Express响应对象
 * @param {NextFunction} next 下一步中间件
 */
const requestArrivalTime = (req, res, next) => {
  // 记录请求到达的时间（ISO格式，便于解析）
  const arrivalTime = new Date().toISOString();
  // 设置响应头：X-Request-Arrival-Time（自定义非标准头，前缀X-区分）
  res.setHeader('X-Request-Arrival-Time', arrivalTime);
  // 传递到下一个中间件/路由处理
  next();
};
module.exports = requestArrivalTime;