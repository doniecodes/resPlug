import ThemedTextInput from './ThemedTextInput';
import { StyleSheet, Text,
View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { useState } from 'react';

import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context";


const HeaderMarketplace = () => {
  
  //States
  const [focused, setFocused] = useState(false);
  const [term, setTerm] = useState("");
  
  //insets
  const insets = useSafeAreaInsets();
  
  //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    <>
    <ThemedView
    style={styles.header}>
      
      <ThemedText
      title={true} style={styles.title}>
        Marketplace
      </ThemedText>
      
      <View style={styles.menu}>
        <Pressable>
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

export default HeaderMarketplace;

const styles = StyleSheet.create({
  header: {
    //backgroundColor: '#201e2b',
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  }
});