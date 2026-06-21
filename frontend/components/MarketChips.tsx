import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

import { Link } from 'expo-router';

import { useState } from 'react';

const MarketChips = ({
  categories, activeCategory, setActiveCategory
}) => {
  
  const handleCategory = (category) => {
    setActiveCategory(category);
  }
  
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}>
    <ThemedView style={styles.chips}>
      
      {
      categories.map((category)=> {
      const isSelected = activeCategory === category;
        return (
        <Pressable
        key={category}
        onPress={()=> handleCategory(category)}
        style={({pressed})=>
        [styles.btn,
        pressed && styles.pressed,
        isSelected && styles.activeBtn]}>
            <ThemedText style={isSelected && styles.activeText}>
              {category}
            </ThemedText>
        </Pressable>
        )
      })
      }
      
    </ThemedView>
    </ScrollView>
  );
};

export default MarketChips;

const styles = StyleSheet.create({
  chips: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: '#e4e4e4',
    paddingVertical: 3,
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 100
  },
  pressed: {
    opacity: 0.7,
    color: "#fff"
  },
  activeBtn: {
    backgroundColor: 'purple',
    color: "#fff"
  },
  activeText: {
    color: "#fff"
  }
});