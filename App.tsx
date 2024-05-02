
import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import LoginPage from './app/atomic/pages/LoginPage';
import { theme } from './app/common/theme';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.appleGreen, height: '100%'}}>
    <View>
      <LoginPage/>
    </View>
    </SafeAreaView>
  );
}

export default App;
