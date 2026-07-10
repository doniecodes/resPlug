import ChatsHook from '../../hooks/ChatsHook';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Tabs } from "react-native-collapsible-tab-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import ChatCard from '../../components/ChatCard';


const GeneralChatsTab = () => {
  
   //useEffect to fetch chats data
  useEffect(()=> {
    const getData = async ()=> {
      try {
      const data = await getChats();
      const generalChats = data.filter((x)=> x.category === "General");
      setChats(generalChats);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])
  
  //chats data
  const { getChats } = ChatsHook();
  
  const [ chats, setChats ] = useState(null);
  const chatsData = chats && chats;
  
  const insets = useSafeAreaInsets();
  
  //theme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    <>
      <Tabs.FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{backgroundColor: theme.background, paddingBottom: insets.bottom + 10}, styles.chatsContainer]}
      keyExtractor={(item)=> item.id}
      data={chatsData}
      renderItem={({item})=> (
      <ChatCard
      key={item.id}
      item={item}
      />
      )
      }
      />
    </>
  );
};

export default GeneralChatsTab;

const styles = StyleSheet.create({
  chatsContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  }
});