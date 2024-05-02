import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  
});

export default Input;
