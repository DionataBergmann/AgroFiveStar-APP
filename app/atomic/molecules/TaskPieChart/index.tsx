import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { theme } from '../../../common/theme';

interface TaskPieChartProps {
  completed: number;
  pending: number;
}

const TaskPieChart: React.FC<TaskPieChartProps> = ({ completed, pending }) => {
  const screenWidth = Dimensions.get('window').width;

  const chartData = [
    {
      name: 'Concluídas',
      count: completed,
      color: theme.colors.appleGreen, 
      legendFontColor: theme.colors.gray,
      legendFontSize: 15,
    },
    {
      name: 'Pendentes',
      count: pending,
      color: theme.colors.vividOrange, 
      legendFontColor: theme.colors.gray,
      legendFontSize: 15,
    },
  ];

  return (
    <PieChart
      data={chartData}
      width={screenWidth}
      height={220}
      chartConfig={{
        backgroundColor: theme.colors.white,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
      accessor="count"
      backgroundColor="transparent"
      paddingLeft="15"
    />
  );
};

export default TaskPieChart;
