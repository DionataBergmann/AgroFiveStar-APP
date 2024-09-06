import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from '../../organism/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userName = await AsyncStorage.getItem('userName');
        const userEmail = await AsyncStorage.getItem('userEmail');
        
        const userData = {
          name: userName || '',
          email: userEmail || '',
        };
        
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Profile user={user} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProfileScreen;
