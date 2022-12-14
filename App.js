import React from "react";
import { Image } from "react-native";
import { View } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";

import FirstScreen from "./chatting_diary/screens/FirstScreen";
import ChattingScreen from "./chatting_diary/screens/ChattingScreen";
import Calendars from "./chatting_diary/screens/CalendarScreen";
import FeedbackScreen from "./chatting_diary/screens/FeedbackScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? require("./assets/home_click.png")
                  : require("./assets/home_nonclick.png");
              } else if (route.name === "Chatting") {
                iconName = focused
                  ? require("./assets/chatting_click.png")
                  : require("./assets/chatting_nonclick.png");
              } else if (route.name === "Calender") {
                iconName = focused
                  ? require("./assets/calendar_click.png")
                  : require("./assets/calendar_nonclick.png");
              } else if (route.name === "Feedback") {
                iconName = focused
                  ? require("./assets/feedback_click.png")
                  : require("./assets/feedback_nonclick.png");
              }

              return (
                <Image source={iconName} style={{ width: 25, height: 25 }} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "#ff6600",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={FirstScreen} />
          <Tab.Screen name="Chatting" component={ChattingScreen} />
          <Tab.Screen
            name="Feedback"
            component={FeedbackScreen}
          />
          <Tab.Screen name="Calender" component={Calendars} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
