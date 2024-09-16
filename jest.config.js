module.exports = {
  preset: 'react-native',
  setupFiles: ['./setupTests.js'], 
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|@react-navigation|@react-native-community|@apollo|react-native-vector-icons|react-native-chart-kit|date-fns)',
  ],
};
