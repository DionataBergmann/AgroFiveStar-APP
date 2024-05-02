import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { theme } from '../../../common/theme';

const LoginForm = ({ onLogin }) => (
  <View>
    <Input placeholder="Email" style={styles.input} />
    <Input placeholder="Senha" style={styles.input} secureTextEntry={true} />
    <Button title="Login" onPress={onLogin} style={styles.button} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor:'white',
  },
  button: {
    padding: 10,
    marginTop: 20,
    backgroundColor: theme.colors.hippieGreen,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
});

export default LoginForm;
