import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"


export default function TabLayout () {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light;

  
  return (
    <>
    <Tabs screenOptions ={{
    headerShown: false,
    tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: theme.navBackground,
        paddingTop: 10,
        height: 110
      },
      tabBarActiveTintColor: theme.iconColorFocused,
      tabBarInactiveTintColor: theme.iconColor
    }}>
      
      <Tabs.Screen
      name="home"
      options={{title: "Home",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "home" : "home-outline"}
        color = {focused ? theme.iconColorFocused : theme.iconColor}
        /> )}}/>
        
      <Tabs.Screen
      name="events"
      options={{title: "Events",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "people" : "people-outline"}
        color = {focused ? theme.iconColorFocused : theme.iconColor}
        /> )}}/>
        
      <Tabs.Screen
      name="chats"
      options = {{ title: "Chats",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "chatbubbles" : "chatbubbles-outline"}
        color = {focused ? theme.iconColorFocused : theme.iconColor}
        /> )}}/>
        
      <Tabs.Screen
      name="market"
      options={{title: "Market",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "storefront" : "storefront-outline"}
        color = {focused ? theme.iconColorFocused : theme.iconColor}
        /> )}}/>
      
      <Tabs.Screen
      name="profile"
      options={{title: "Profile",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "person" : "person-outline"}
        color = {focused ? theme.iconColorFocused : theme.iconColor}
        /> )}}/>
        
    </Tabs>
    </>
  );
};