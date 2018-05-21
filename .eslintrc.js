module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  "plugins": [
    "import", "pug", "html"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    //缩进设置为4个空格
    "indent": ["error", 4],
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "linebreak-style": [0],
    "max-len": ["error", 150],
    "no-nested-ternary": 0,
    "padded-blocks": "off",
    // 对象的最后一个属性末尾必须有逗号（没必要限制）
    "comma-dangle": "off",
    // 禁止使用特定的语法（没必要，因为 for in 很常用）
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    // export 单个属性的对象时必须使用 default 模式（没必要，放开）
    "import/prefer-default-export": "off",
    // 变量必须先定义后使用（针对函数，类名放开限制）
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": false,
      "variables": false
    }],
    // 定义过的变量必须使用（针对函数中未使用的参数，放开）
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "none",
      "caughtErrors": "none"
    }],
    "no-debugger": 0,
    "no-new": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-script-url": "off"
  },
  "globals": {
    "jQuery": true,
    "$": true,
    "LANGUAGE": true,
    "EXCHANGERATE": true,
    "require": true
  }
};
