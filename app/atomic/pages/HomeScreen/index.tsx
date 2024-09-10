import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import MountainProgress from '../../molecules/MountainProgress';
import { theme } from '../../../common/theme';
import TaskPieChart from '../../molecules/TaskPieChart';
import { TaskStatus, useGetTasksQuery } from '../../../generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        setUserId(storedUserId);
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };

    getUserData();
  }, []);

  const { data } = useGetTasksQuery({
    variables:{
      filter:{
        userId: {eq: userId}
      }
    }
  })
 
  const completedTasks = data?.tasks?.nodes?.filter(task => task.status === TaskStatus.Done).length || 0;
  const pendingTasks = data?.tasks?.nodes?.filter(task => task.status === TaskStatus.Pending).length || 0;

  const totalTasks = completedTasks + pendingTasks;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
   
        <MountainProgress completionPercentage={completionPercentage} />

        <TaskPieChart completed={completedTasks} pending={pendingTasks} />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerText: {
    fontSize: 24,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
