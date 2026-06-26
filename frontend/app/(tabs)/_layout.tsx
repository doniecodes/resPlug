import { StatusBar } from 'expo-status-bar';

import { useColorScheme, Image, View, StyleSheet } from "react-native"
import { Colors } from "../../constants/Colors"
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import userIcon from "../../assets/images/doniecode.png";


export default function TabLayout () {
  
  const colorScheme = useColorScheme()
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  const insets = useSafeAreaInsets();

  
  return (
    <>
    <StatusBar style="dark-content" hidden={false}/>
    <Tabs screenOptions ={{
    headerShown: false,
    tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: theme.navBackground,
        paddingTop: 7,
        height: 50 + insets.bottom,
        paddingBottom: insets.bottom
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
        color = {focused ? theme.iconColorFocused2 : theme.iconColor}
        /> )}}/>
        
      <Tabs.Screen
      name="events"
      options={{title: "Events",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "people" : "people-outline"}
        color = {focused ? theme.iconColorFocused2 : theme.iconColor}
        /> )}}/>
        
      <Tabs.Screen
      name="chats"
      options = {{ title: "Chats",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "chatbubbles" : "chatbubbles-outline"}
        color = {focused ? theme.iconColorFocused2 : theme.iconColor}
        /> )}}/>
        
      <Tabs.Screen
      name="market"
      options={{title: "Market",
      tabBarIcon : ({focused})=> (
        <Ionicons
        size = {25}
        name = {focused ? "storefront" : "storefront-outline"}
        color = {focused ? theme.iconColorFocused2 : theme.iconColor}
        /> )}}/>
      
      <Tabs.Screen
      name="profile"
      options={{title: "Profile",
      tabBarIcon : ({focused})=> (
      <View>
        <Image
        style={styles.icon}
        source={userIcon} />
      </View>
         )}}/>
        
    </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "#6D28B9",
  }
})