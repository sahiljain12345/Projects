import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;


export default class Graph extends Component {

   
  render() {

    var temperature = this.props.temperatures;
    console.log(temperature);
    var dates = this.props.dates;
    console.log(dates);

    const data = {
      labels: dates,
      datasets: [
        {
          data: temperature,
        }
      ],
    };
    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LineChart
  data={data}
  width={500}
  height={220}
  chartConfig={chartConfig}
  
/>
</View>

    );
  }
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(50, 100, 100, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

