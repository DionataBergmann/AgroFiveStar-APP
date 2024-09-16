module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|@react-navigation|@react-native-community|@apollo|react-native-vector-icons|react-native-chart-kit|date-fns)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
