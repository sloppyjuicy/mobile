module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './app/assets',
            '@components': './app/components',
            '@config': './app/config',
            '@utils': './app/utils/',
            '@screens': './app/screens',
            '@hooks': './app/hooks',
            '@navigation': './app/navigation',
            '@api': './app/api',
            '@auth': './app/auth',
          },
        },
      ],
    ],
  };
};
