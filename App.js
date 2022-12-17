import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./components/Main";
import Course from "./components/Course";


const Stack = createNativeStackNavigator();

const App = () => {
  // const navigation = useNavigation()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoogleCourse"
          component={Course}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
