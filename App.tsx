import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './app/atomic/pages/LoginScreen';
import { ApolloProvider } from '@apollo/client';
import client from './app/Apollo';
import BottomTabNavigator from './app/navigators/BottomTabNavigator';
import { ActivityIndicator, View } from 'react-native';
import { theme } from './app/common/theme';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setUserToken(token);
      setIsLoading(false);
    };
    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName={userToken ? 'HomeTabs' : 'Login'} 
       >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeTabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
