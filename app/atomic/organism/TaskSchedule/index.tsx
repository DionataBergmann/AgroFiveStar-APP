import React from 'react';
import { View } from 'react-native';
import CustomSchedule from '../../molecules/CustomSchedule';

const Schedule = ({ tasks, onDayPress, onTaskPress }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomSchedule
        tasks={tasks}
        onDayPress={onDayPress}
        onTaskPress={onTaskPress}
      />
    </View>
  );
};

export default Schedule;
