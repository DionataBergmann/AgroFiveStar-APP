import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Modal, TouchableOpacity, Text } from 'react-native';
import { SortDirection, TaskSortFields, useGetTasksQuery } from '../../../generated/graphql';
import useDeleteOneTask from './hooks/useDeleteOneTask';
import useCreateOneTask from './hooks/useCreateOneTask';
import Schedule from '../../organism/TaskSchedule';
import CreateTaskForm from '../../molecules/CreateTaskForm';
import TaskDetail from '../../molecules/TaskDetail';
import { theme } from '../../../common/theme';
import useUpdateOneTask from './hooks/useUpdateOneTask';

const TaskScreen = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);
  const [isCreateTaskVisible, setCreateTaskVisible] = useState(false);

  const { deleteTask } = useDeleteOneTask();
  const { createTask } = useCreateOneTask();
  const { updateTask } = useUpdateOneTask()

  const { data, loading, refetch } = useGetTasksQuery({
    variables: {
      filter: { date: { eq: selectedDay } },
      sorting: { direction: SortDirection.Desc, field: TaskSortFields.Date },
      paging: { limit: 50 }
    }
  });

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setSelectedTask(null);
      refetch();
    } catch (e) {
      console.error('Error deleting task:', e);
    }
  };

  const handleCreateTask = () => {
    setCreateTaskVisible(true);
  };

  const handleEditTask = () => {
    setCreateTaskVisible(true); 
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedTask) {
        await updateTask(selectedTask.id, formData); 
      } else {
        await createTask(formData); 
      }
      setSelectedTask(null);
      await refetch();
    } catch (e) {
      console.error('Error submitting task:', e);
    }
    setCreateTaskVisible(false);
  };

  const handleCancelCreateTask = () => {
    setCreateTaskVisible(false);
  };

  const tasks = data?.tasks?.nodes || [];

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={{ paddingTop: 10 }} color={theme.colors.hippieGreen} />
      ) : (
        <Schedule
          tasks={tasks}
          onDayPress={(day) => setSelectedDay(day.toISOString().split('T')[0])}
          onTaskPress={(task) => setSelectedTask(task)}
        />
      )}

      {selectedTask && (
        <TaskDetail
          visible={!!selectedTask}
          onClose={() => setSelectedTask(null)}
          task={selectedTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onComplete={() => { /* Implement complete logic */ }}
        />
      )}

      <TouchableOpacity style={styles.fab} onPress={handleCreateTask}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal visible={isCreateTaskVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <CreateTaskForm
            onSubmit={handleFormSubmit}
            onCancel={handleCancelCreateTask}
            initialData={selectedTask}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: theme.colors.hippieGreen,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default TaskScreen;
