module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  // 自定义规则
  rules: {
    // 1. 允许 console.log（开发环境常用，设为 'off' 或 'warn'）
    'no-console': 'off',
    
    // 2. 强制使用单引号（'error' 表示报错，'single' 表示单引号）
    'quotes': ['error', 'single'],
    
    // 3. 强制语句末尾加分号
    'semi': ['error', 'always'],
    
    // 4. 缩进为 2 个空格
    'indent': ['error', 2],
    
    // 5. 允许文件末尾有空行（设为 'off'）
    'eol-last': 'off',
    
    // 6. 限制每行最大长度为 120 字符
    'max-len': ['error', { code: 120 }],
  },
};