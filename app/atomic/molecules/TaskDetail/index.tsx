import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../common/theme';
import DeleteConfirmationModal from '../../atoms/DeleteConfirmationModal';
import { Task } from '../../../generated/graphql';

interface TaskDetailProps {
  visible: boolean;
  onClose: () => void;
  task: Task;
  onEdit: () => void;
  onDelete: (id: string) => Promise<void>;
  onComplete: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task, visible, onClose, onEdit, onDelete, onComplete }) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleDeletePress = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmDelete = async () => {
    setConfirmationVisible(false);
    await onDelete(task.id);
    onClose();
  };
console.log(task)
  return (
    <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={onClose}>
        <TouchableOpacity style={styles.card} activeOpacity={1}>
          <View style={styles.header}>
            <Ionicons name="time-outline" size={20} color="white" />
            <Text style={styles.statusText}>Tarefa pendente</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={handleDeletePress} style={styles.actionButton}>
                <Ionicons name="trash-outline" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
                <Ionicons name="pencil-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.description}>{task.description}</Text>
          <TouchableOpacity onPress={onComplete} style={styles.completeButton}>
            <Text style={styles.completeButtonText}>Marcar como concluída</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>

      <DeleteConfirmationModal
        visible={isConfirmationVisible}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmationVisible(false)}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    backgroundColor: theme.colors.hippieGreen,
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  completeButton: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskDetail;
