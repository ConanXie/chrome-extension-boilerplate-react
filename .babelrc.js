module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      // "@babel/preset-env"
      '@babel/preset-react',
      // "react-app"
    ],
    plugins: [
      // "@babel/plugin-proposal-class-properties",
      api.env('development') && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
