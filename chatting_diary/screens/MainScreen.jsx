import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FirstScreen from "./FirstScreen";
import ChattingScreen from "./ChattingScreen";
import FeedbackScreen from "./FeedbackScreen";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstScreen}></Stack.Screen>
        <Stack.Screen name="채팅" component={ChattingScreen}></Stack.Screen>
        <Stack.Screen name="피드백" component={FeedbackScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
// const Tab = createBottomTabNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen name="Home" component={HomeScreen} 
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icon name="home" size={size} color={color} /> 
//             ), 
//           }}
//         />
//         <Tab.Screen name="Chatting" component={ChattingScreen} 
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icon name="message" size={size} color={color} /> 
//             ), 
//           }}
//         />
//         <Tab.Screen name="Feedback" component={FeedbackScreen} 
//           options={{
//             tabBarIcon: ({color, size}) => (
//               <Icon name="notification" size={size} color={color} /> 
//             ), 
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default MainScreen;
