import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { format, addDays, subDays } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../common/theme';
import { ptBR } from 'date-fns/locale';

const CustomSchedule = ({ tasks, onDayPress, onTaskPress }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const daysArray = Array.from({ length: 7 }, (_, i) =>
    addDays(subDays(selectedDate, 3), i)
  );

  const handleDayPress = (day) => {
    setSelectedDate(day);
    onDayPress(day);
  };

  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const onCalendarChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setCalendarVisible(false);
    setSelectedDate(currentDate);
    onDayPress(currentDate); 
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderDayItem = ({ item }) => {
    const isSelected = format(item, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');

    return (
      <TouchableOpacity onPress={() => handleDayPress(item)} style={[styles.dayItem, isSelected && styles.selectedDay]}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{format(item, 'dd', { locale: ptBR })}</Text>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{capitalizeFirstLetter(format(item, 'EEEEEE', { locale: ptBR }))}</Text>
      </TouchableOpacity>
    );
  };

  const filteredTasks = tasks.filter(task => format(new Date(task.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'));

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.daysContainer}>
        <FlatList
          data={daysArray}
          renderItem={renderDayItem}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: 'space-around' }}
        />
      </View>
      <View style={styles.calendarContainer}>
        <TouchableOpacity onPress={openCalendar} style={styles.calendarIcon}>
          <Ionicons name="calendar-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TouchableOpacity key={task.id} style={styles.taskItem} onPress={() => onTaskPress(task)}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskDescription}>{task.description}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noTasksText}>Nenhuma tarefa para este dia!</Text>
        )}
      </View>

      {isCalendarVisible && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={onCalendarChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  calendarIcon: {
    paddingRight: 5,
  },
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  dayItem: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedDay: {
    backgroundColor: theme.colors.hippieGreen,
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  selectedDayText: {
    color: '#fff',
  },
  tasksContainer: {
    flex: 1,
    padding: 10,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
  },
  noTasksText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default CustomSchedule;
