module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'module:react-native-dotenv', // To use environment variables
    // 'react-native-reanimated/plugin', // Required for react-native-reanimated
    'nativewind/babel', // For using Tailwind CSS with React Native
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@stacks': './src/stacks',
          '@screens': './src/screens',
          '@common': './src/common',
          '@utils': './src/utils',
          '@icons': './assets/icons',
          '@images': './assets/images',
          '@locales': './src/locales',
        },
      },
    ],
  ],
};
