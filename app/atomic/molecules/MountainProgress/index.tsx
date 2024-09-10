import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Svg, { Path, Circle, Image as RNSImage } from 'react-native-svg';
import { theme } from '../../../common/theme';

const MountainProgress = ({ completionPercentage }: { completionPercentage: number }) => {

  const points = [
    { x: 220, y: 330, milestone: 0 },
    { x: 150, y: 300, milestone: 10 },
    { x: 80, y: 260, milestone: 20 },
    { x: 170, y: 275, milestone: 30 },
    { x: 270, y: 240, milestone: 40 },
    { x: 360, y: 220, milestone: 48 },
    { x: 330, y: 160, milestone: 55 },
    { x: 240, y: 130, milestone: 60 },
    { x: 160, y: 190, milestone: 68 },
    { x: 100, y: 130, milestone: 75 },
    { x: 160, y: 110, milestone: 80 },
    { x: 220, y: 80, milestone: 90 },
    { x: 190, y: 50, milestone: 100 },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/mountain.jpg')} 
        style={styles.mountainImage}
        resizeMode="contain"
      />

      <Svg height="100%" width="100%" style={styles.svg}>
   
        {points.map((point, index) => {
          if (index === points.length - 1) return null; 

          const nextPoint = points[index + 1];
          const isNextReached = nextPoint.milestone <= completionPercentage;

          return (
            <Path
              key={index}
              d={`M ${point.x} ${point.y} L ${nextPoint.x} ${nextPoint.y}`}
              stroke={isNextReached ? theme.colors.vividOrange : theme.colors.whiteSmoke} 
              strokeWidth="4"
              strokeDasharray={isNextReached ? "0" : "10,5"} 
            />
          );
        })}

        {points.map((point, index) => (
          <Circle
            key={index}
            cx={point.x.toString()}
            cy={point.y.toString()}
            r="8"
            stroke="black"
            strokeWidth="2"
            fill={point.milestone <= completionPercentage ? theme.colors.vividOrange : theme.colors.whiteSmoke}
          />
        ))}

        <RNSImage
          href={require('../../../assets/boat.png')} 
          x={points[0].x + 10} 
          y={points[0].y - 25} 
          height="60" 
          width="60"
        />

        <RNSImage
          href={require('../../../assets/flag.png')} 
          x={points[points.length - 1].x - 5} 
          y={points[points.length - 1].y - 37} 
          height="30" 
          width="30"  
        />
      </Svg>

      <Text style={styles.label}>Progresso: {completionPercentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    position: 'relative',
  },
  mountainImage: {
    width: 400,  
    height: 450, 
  },
  svg: {
    position: 'absolute',
    top: 0, 
    left: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default MountainProgress;
