module.exports = {
  presets: [
    require.resolve("@babel/preset-env"),
    require.resolve("@babel/preset-react"),
    [require.resolve("@babel/preset-typescript"), { runtime: "automatic" }]
  ],
  plugins: [require.resolve("babel-plugin-dev-expression")]
};
