import React from "react";

import Home from "./screens/home";
import DailyPics from "./screens/dailyPics";
import StarMap from "./screens/starMap";
import SpaceCraft from "./screens/spaceCrafts";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="spaceCraft" component={SpaceCraft} />
        <Stack.Screen name="starMap" component={StarMap} />
        <Stack.Screen name="dailyPics" component={DailyPics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
