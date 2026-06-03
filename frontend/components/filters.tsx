import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

const Filters = () => {
  
  //states
  const [ filter, setFilter ] = useState("");
  const [ term, setTerm ] = useState("");
  
  //handle getFeeds function
  useEffect(()=> {
  const getFeeds = async () => {
    
  }
  getFeeds();
  )}
  
  return (
    <ThemedView>
      
    </ThemedView>
  );
};

export default Filters;

const styles = StyleSheet.create({});