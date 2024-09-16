import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MountainProgress from '../../molecules/MountainProgress';
import { theme } from '../../../common/theme';
import TaskPieChart from '../../molecules/TaskPieChart';
import { TaskStatus, useGetTasksQuery } from '../../../generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [userId, setUserId] = useState<string | null>(null);

  const { data, refetch } = useGetTasksQuery({
    variables: {
      filter: {
        userId: { eq: userId },
      },
    },
    skip: !userId,
  });

  useFocusEffect(
    useCallback(() => {
      const getUserData = async () => {
        try {
          const storedUserId = await AsyncStorage.getItem('userId');
          setUserId(storedUserId);
        } catch (error) {
          console.error('Failed to load user data:', error);
        }
      };

      getUserData();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      if (userId) {
        refetch(); 
      }
    }, [userId, refetch])
  );

  const completedTasks = data?.tasks?.nodes?.filter((task) => task.status === TaskStatus.Done).length || 0;
  const pendingTasks = data?.tasks?.nodes?.filter((task) => task.status === TaskStatus.Pending).length || 0;

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
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default HomeScreen;
