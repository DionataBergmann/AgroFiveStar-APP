import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo/logo_branca.png')} style={styles.logo} />
      <Text style={styles.title}>Farm Assist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
});

export default CustomHeader;
