module.exports = function Api(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
