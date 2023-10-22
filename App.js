import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import dummyArticles from "./dummies/articles";
import axios from "axios";
import { Constants } from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { store } from "./store";
import { Provider } from "react-redux";
import { HomeScreen } from "./screens/HomeScreen";
import { ArticleScreen } from "./screens/ArticleScreen";
import { ClipScreen } from "./screens/ClipScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeTab") {
      return <FontAwesome name="home" size={size} color={color} />;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false, title: "Home" }}
          />
          <Tab.Screen
            name="ClipTab"
            component={ClipScreen}
            options={{ headerShown: false, title: "Clipff" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
