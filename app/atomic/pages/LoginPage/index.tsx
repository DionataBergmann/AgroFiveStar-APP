import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LoginForm from '../../molecules/LoginForm';


const LoginPage = () => (
  <View style={styles.container}>
    <Image source={require('../../../assets/logo/logo.png')} style={styles.logo} />
    <LoginForm onLogin={() => console.log('logged')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 100,
  },
  logo: {
    marginBottom: 50, 
    width: 150, 
    height: 150
  },
});

export default LoginPage;
