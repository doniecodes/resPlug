import FeedsHook from '../../hooks/FeedsHook';
import FeedCard from '../../components/FeedCard';
//import Filters from '../../components/Filters';

import { StyleSheet, Text, View,
Pressable, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors';

import { Ionicons } from "@expo/vector-icons"
import { globalStyles } from '../../styles/global.ts';

import { useSafeAreaInsets } from "react-native-safe-area-context";


const Home = () => {
  
    //getFeeds Function
  useEffect(()=> {
    const getData = async ()=> {
      try{
      const data = await getFeeds();
      setFeeds(data);
      }catch(error){
        console.log(error);
      }
    }
    getData();
  }, []);
  
    //states
  const [ focused, setFocused ] = useState(false);
  const [ feeds, setFeeds ] = useState(null);
  
    //hooks 
  const { getFeeds, error, loading } = FeedsHook();
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  

  
  //safe area contexts
  const insets = useSafeAreaInsets();
  
  //user
  const username = "doniecode";
  
  //feedsElements
  const feedsElements = feeds !== null && feeds;
  console.log(feedsElements);
  
  //Screen Header
  const ScreenHeader = ()=> {
    return (
      <View
      style={{backgroundColor: theme.background,
      paddingTop: insets.top}}>
        
      <Header />
      
      <ThemedView style={styles.containerGreeting}>
        <ThemedText style={styles.center}>
          Good morning <ThemedText style={{fontWeight: "bold"}}>{username}</ThemedText>!
        </ThemedText>
      </ThemedView>
      
      </View>
      )
  }
  
  return (
    <>
      {/*Feed Posts*/}
        <FlatList
        ListHeaderComponent={ScreenHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedsContainer}
        data={feedsElements}
        keyExtractor = {(item)=> item.id}
        renderItem={({item})=> (
          <FeedCard
          key={item.id}
          id={item.id}
          image={item.user.avatar_url}
          username={item.user.username}
          residence={item.user.residence}
          title={item.title}
          desc={item.description}
          categories={item.categories}
          stats={item.stats}
          />
          )}
        />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerGreeting: {
    paddingVertical: 8,
    marginBottom: 5,
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
    paddingTop: 3,
    paddingHorizontal: 3,
    flexDirection: 'column',
    gap: 5,
    marginHorizontal: "auto",
    marginVertical: 0,
    backgroundColor: '#f8f8f8',
  }
});