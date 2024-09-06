import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileForm from '../../molecules/ProfileForm';
import useUpdateOneUser from '../../pages/ProfileScreen/hooks/useUpdateOneUser';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ user }) => {
  const { updateUser } = useUpdateOneUser()
  const navigation = useNavigation()
  
  const handleUpdateProfile = async (data) => {
    try {
      await updateUser(data);
    } catch (e) {
      console.error('Error updating profile:', e);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('token'); 

      navigation.reset({
        index: 0,
        routes: [{  name: 'Login' }], 
      });
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ProfileForm initialData={user} onSubmit={handleUpdateProfile} logout={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Profile;
