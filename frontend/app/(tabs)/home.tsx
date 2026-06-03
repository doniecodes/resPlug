import FeedCard from '../../components/FeedCard';
//import Filters from '../../components/Filters';

import { StyleSheet, Text, View,
Pressable, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Header from '../../components/Header';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors';

import { Ionicons } from "@expo/vector-icons"
import { globalStyles } from '../../styles/global.ts';

import { useSafeAreaInsets } from "react-native-safe-area-context";


const Home = () => {
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //states
  const [ focused, setFocused ] = useState(false);
  
  //safe area contexts
  const insets = useSafeAreaInsets();
  
  //user
  const username = "doniecode";
  
  return (
    <>
      <View style={{paddingTop: insets.top}}>
      <ScrollView style={[{backgroundColor: theme.background}, styles.body]}>
        
      <Header />
      
      <ThemedView style={styles.containerGreeting}>
        <ThemedText style={styles.center}>
          Good morning <ThemedText style={{fontWeight: "bold"}}>{username}</ThemedText>!
        </ThemedText>
      </ThemedView>
      
      {/*Filters list*/}
      
      
      {/*Feed Posts*/}
      <View style={styles.feedsContainer}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </View>
      
      </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
  },
  containerGreeting: {
    paddingVertical:  5,
    //borderBottomWidth: 1,
    //borderBottomColor: "#e5e5e5"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  center: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  // feeds
  feedsContainer: {
    width: "100%",
    paddingBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 3,
    flexDirection: 'column',
    gap: 20,
    marginHorizontal: "auto",
    marginVertical: 0
  }
});