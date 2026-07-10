import ThemedView from './ThemedView';
import { StyleSheet, Text, View,
Pressable, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { useState } from "react"

const SearchBox = ({ handleSearch, placeholder, width="80%", fixed=false }) => {
  
  //states
    const [term, setTerm] = useState("");
    const [focused, setFocused] = useState(false);
    
    //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    <View style={[styles.searchWrapper, fixed && styles.fixed]}>
    <ThemedView style={styles.searchContainer}>
        <TextInput
        style={[{width: width}, styles.searchInput]}
        name="search"
        value={term}
        onChangeText={setTerm}
        placeholder={placeholder}
        keyboardType="search"
        />
        
        <Pressable
        onPress={handleSearch}
        style={styles.icon}>
        <Ionicons
        size={28}
        name={focused ? "search" : "search-outline"}
        color={theme.iconColorFocused}
        />
        </Pressable>
    </ThemedView>
    </View>
  );
};

export default SearchBox;

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
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  searchInput: {
    borderRadius: 50,
    color: "#201e2b",
  },
});