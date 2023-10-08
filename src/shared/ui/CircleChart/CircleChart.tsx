import React from 'react';
import {Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {circleChartStyle} from './circleChartStyle';

interface Props {
  widthAndHeight: number;
  series: number[];
  sliceColor: string[];
  totalSpending: number;
}

const CircleChart = ({widthAndHeight, series, sliceColor, totalSpending}: Props) => {
  return (
    <View>
      <View
        style={{
          width: widthAndHeight,
          height: widthAndHeight,
          flex: 0,
          alignItems: 'center',
          justifyContent: 'center',
          position: "absolute",
        }}>
        <Text style={circleChartStyle.title}>{totalSpending} lei</Text>
      </View>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.8}
        coverFill={'transparent'}
      />
    </View>
  );
};

export default CircleChart;
