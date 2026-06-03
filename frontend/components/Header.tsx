import { StyleSheet, Text,
View, Pressable } from 'react-native';

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { useState } from 'react';

import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  
  //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //states
  const [ focused, setFocused ] = useState(false);
  
  //safe area contexts
  const insets = useSafeAreaInsets();
  
  
  return (
    <>
    <ThemedView
    style={styles.header}>
      
      <View style={styles.logoContainer}>
        <Pressable>
        <View style={styles.menuBtn}>
          <Link href="/settings">
        <Ionicons
        size={28}
        name="list"
        color={theme.iconColorFocused}
        />
        </Link>
        </View>
        </Pressable>
      <ThemedText
      title={true} style={styles.title}>
        resPlug
      </ThemedText>
      </View>
      
      <View style={styles.menu}>
        
        <Pressable
        onPressIn={()=> setFocused(true)}
        onPressOut={()=> setFocused(false)}
        >
        <Ionicons
        style={styles.icon}
        size={28}
        name={focused ? "add" : "add-outline"}
        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
        />
        </Pressable>
        
        <Pressable
        onPressIn={()=> setFocused(true)}
        onPressOut={()=> setFocused(false)}
        >
        <Ionicons
        style={styles.icon}
        size={28}
        name={focused ? "search" : "search-outline"}
        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
        />
        </Pressable>
        
        <Pressable
        onPressIn={()=> setFocused(true)}
        onPressOut={()=> setFocused(false)}
        >
        <Ionicons
        style={styles.icon}
        size={28}
        name={focused ? "notifications" : "notifications-outline"}
        color={focused ? theme.iconColorFocused : theme.iconColorFocused}
        />
        </Pressable>
        
      </View>
      
    </ThemedView>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  menuBtn: {
    alignItems: "center",
    marginBottom: -6,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  header: {
    //backgroundColor: '#201e2b',
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  icon: {
  //backgroundColor: '#0F1115',
  }
});