module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["react-app", "airbnb", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "prettier/prettier": "warn",
    "react/no-array-index-key": "off"
  }
};
