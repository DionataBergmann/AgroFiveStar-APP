import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../atomic/pages/HomeScreen';
import ScheduleScreen from '../atomic/pages/ScheduleScreen';
import ChatScreen from '../atomic/pages/ChatScreen';
import ProfileScreen from '../atomic/pages/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../common/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../atomic/atoms/CustomHeader';

const Tab = createBottomTabNavigator();

function ProfileWithLogout() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  return (
    <ProfileScreen onLogout={handleLogout} />
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tarefas') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Conversa') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.vividOrange,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.hippieGreen, 
        },
        headerStyle: {
          backgroundColor: theme.colors.hippieGreen, 
        },
        headerTitle: (props) => <CustomHeader {...props} />, 
            headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Tarefas" component={ScheduleScreen} />
      <Tab.Screen name="Conversa" component={ChatScreen} />
      <Tab.Screen name="Perfil" component={ProfileWithLogout} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
