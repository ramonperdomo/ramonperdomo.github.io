module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 13,
    requireConfigFile: false,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".d.ts", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
};
