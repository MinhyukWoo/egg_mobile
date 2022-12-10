import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React from "react";
import ChattingScreen from "./ChattingScreen";
import FeedbackScreen from "./FeedbackScreen";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="채팅">
        <Stack.Screen name="채팅" component={ChattingScreen}></Stack.Screen>
        <Stack.Screen name="피드백" component={FeedbackScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
