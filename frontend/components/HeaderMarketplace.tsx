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
  
  //Handle search
  const handleSearch = async ()=> {
    
  }
  
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
    
    <View style={styles.searchWrapper}>
    <ThemedView style={styles.searchContainer}>
        <TextInput
        style={styles.searchInput}
        name="search"
        value={term}
        onChangeText={setTerm}
        placeholder="Search for items, services..."
        keyboardType="search"
        />
        
        <Pressable onPress={handleSearch}>
        <Ionicons
        style={styles.icon}
        size={28}
        name={focused ? "search" : "search-outline"}
        color={theme.iconColorFocused}
        />
        </Pressable>
    </ThemedView>
    </View>
    
    </>
  );
};

export default HeaderMarketplace;

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    paddingHorizontal: 15,
  },
  searchContainer: {
    width: "100%",
    backgroundColor: '#e4e4e4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: "auto",
    marginVertical: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  searchInput: {
    backgroundColor: 'transparent',
    color: "#201e2b"
  },
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