const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  getValidUsernames,
  getUserById,
  getAllPositions,
  getUsersByIdRange,
} = require('../controllers/userController');

// 1. 获取所有用户
router.get('/', getAllUsers);

// 2. 获取合适的用户名
router.get('/valid-usernames', getValidUsernames);

// 3. 根据ID获取单个用户
router.get('/:id', getUserById);

// 4. 获取所有职位
router.get('/positions/all', getAllPositions);

// 5. 获取ID范围的用户（查询参数：minId、maxId）
router.get('/range/id', getUsersByIdRange);

module.exports = router;