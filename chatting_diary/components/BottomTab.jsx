import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-vector-icons/Ionicons';
import React from "react";
import FirstScreen from "./FirstScreen";
import ChattingScreen from "./ChattingScreen";
import FeedbackScreen from "./FeedbackScreen";

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen 
        name="Home" 
        component={FirstScreen}
        options={{
            tabBarIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
            ),
        }} />
      <BottomTab.Screen 
        name="Chatting" component={ChattingScreen} 
        options={{
            tabBarIcon: ({color, size}) => (
                <Icon name="chatbubbles-sharp" size={size} color={color} />
            ),
        }} />
      <BottomTab.Screen 
        name="Calender" component={FeedbackScreen} 
        options={{
            tabBarIcon: ({color, size}) => (
                <Icon name="calendar" size={size} color={color} />
            ),
        }} />
    </BottomTab.Navigator>
  );
}