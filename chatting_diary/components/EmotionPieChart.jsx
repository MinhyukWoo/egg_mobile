import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";

const initChartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const EmotionPieChart = ({ data }) => {
  const [chartWrapperWidth, setChartWrapperWidth] = useState(0);
  [].sort((a, b) => {
    a.population > b.population;
  });
  return (
    <Box
      w="100%"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
      onLayout={({ nativeEvent }) => {
        setChartWrapperWidth(nativeEvent.layout.width);
      }}
      p={4}
    >
      <PieChart
        data={data
          .sort((a, b) => {
            return a.population < b.population;
          })
          .slice(0, 5)
          .map(({ name, population, color }, index) => {
            return {
              name,
              population,
              color,
              legendFontColor: "#7F7F7F",
              legendFontSize: 9,
            };
          })}
        width={chartWrapperWidth}
        height={200}
        chartConfig={initChartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        center={[0, 0]}
      />
    </Box>
  );
};

export default EmotionPieChart;
