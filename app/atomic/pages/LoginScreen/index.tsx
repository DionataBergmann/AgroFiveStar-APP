import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LoginForm from '../../molecules/LoginForm';
import useLogin from './hooks/useLogin';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, FormProvider } from 'react-hook-form';
import LoadingIndicator from '../../atoms/LoadingIndicator';
import ErrorIndicator from '../../atoms/ErrorIndicator';
import { theme } from '../../../common/theme';

const LoginScreen = () => {
  const navigation = useNavigation();
  const methods = useForm();
  const { login, loadingLogin, error } = useLogin();

  const handleLogin = async (data) => {
    const { email, password } = data;
   
    try {
      const result = await login(email, password);
      const token = result?.data?.loginUser?.token;
      const userId = result?.data?.loginUser?.user?.id;
      const userName = result?.data?.loginUser?.user?.name;
      const userEmail = result?.data?.loginUser?.user?.email;
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userId', userId);
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('userEmail', userEmail);
      navigation.navigate('HomeTabs');
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo/logo_verde.png')} style={styles.logo} />
      <Text style={styles.text}>Farm Assist</Text>
      <FormProvider {...methods}>
        <LoginForm onSubmit={handleLogin} loading={loadingLogin} />
      </FormProvider>
      {loadingLogin && <LoadingIndicator />}
      {error && <ErrorIndicator error={error.message} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    marginBottom: 70,
    width: 340,
    height: 250,
  },
  text:{
    fontWeight: 'bold',
    color: theme.colors.hippieGreen,
    marginTop: -120,
    marginBottom: 50,
    fontSize: 20,
  }
});

export default LoginScreen;
