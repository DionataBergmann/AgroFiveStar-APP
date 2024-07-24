import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../../../common/theme';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={theme.colors.hippieGreen}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -18
  },
});

export default LoadingIndicator;
