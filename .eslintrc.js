module.exports = {
  "extends": [
    "google", "eslint:recommended", "plugin:react/recommended"
  ],
  "plugins": ["react"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
};