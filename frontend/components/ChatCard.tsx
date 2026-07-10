import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { StyleSheet, Text, View,
Image, Pressable, TouchableOpacity } from 'react-native';
 import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

import { Link } from "expo-router"

import { useState } from "react";

import { Ionicons } from "@expo/vector-icons"

const ChatCard = ({item}) => {
  
   //theme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  const time = item.timestamp.split("T")[1].slice(0, 5);
  
  return (
    <Link href={`/chats/${item.id}`}
    isChild >
    <ThemedView style={styles.card}>
      <Image
      style={styles.avatar}
      source={{uri: item.user.avatar}}
      />
      
      <View style={styles.chatInfo}>
        <ThemedText title={true}
        style={styles.name}
        >
          {item.user.name}
        </ThemedText>
        {item.lastMessageSender === "me" ?
        <ThemedText
        style={styles.meMessage}
        >
          {item.user.lastMessage}
        </ThemedText>
        :
        <ThemedText
        style={styles.themMessage}
        >
          {item.lastMessage}
        </ThemedText>
        }
      </View>
      
      <View style={styles.timeWrapper}>
        <ThemedText style={[{color: theme.text}, styles.time]}>
          {time}
        </ThemedText>
        <ThemedText style={styles.unreadCount}>
          {item.unreadCount}
        </ThemedText>
      </View>
    </ThemedView>
    </Link>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e5e5e5",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chatInfo: {
    flex: 1,
    flexDirection: 'column',
    gap: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17
  },
  meMessage: {
    
  },
  themMessage: {
    
  },
  timeWrapper: {
    flexDirection: 'column',
    gap: 10
  },
  time: {
    fontSize: 13
  },
  unreadCount: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 13,
    color: "#fff",
    backgroundColor: "#6D28B9",
    paddingVertical: 1,
    paddingHorizontal: 6,
    borderRadius: 100,
  }
  
});