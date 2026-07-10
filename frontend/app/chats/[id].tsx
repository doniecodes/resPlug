import ChatsHook from "../../hooks/ChatsHook";
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import MessageCard from '../../components/MessageCard';

import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import UseUserContext from "../../hooks/UseUserContext";

import { Colors } from '../../constants/Colors';
import { useColorScheme, FlatList, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";


const ChatDetails = () => {
  
  useEffect(()=> {
    const getData = async ()=> {
      try {
        const data = await getChats(id);
        setChat(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])
  
  useEffect(()=> {
    const getConvos = async ()=> {
      try {
        const data = await getConversation(id);
        setConversation(data);
      } catch (error) {
        console.log(error);
      }
    }
    getConvos();
  }, [])
  
  //id param
  const { id } = useLocalSearchParams();
  
  //hooks
  const { getChats, getConversation } = ChatsHook();
  const { user } = UseUserContext();
  
  //state
  const [ chat, setChat ] = useState(null);
  const [ conversation, setConversation ] = useState(null);
  
  const [ messageValue, setMessageValue ] = useState(null);

  
  //insets
  const insets = useSafeAreaInsets();
    //theme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  const ScreenHeader = ()=> (
    <>
    { chat &&
    <ThemedView style={[{}, styles.header]}>
      <Pressable
        style={({pressed})=> [styles.btn, pressed && styles.iconPressed]}>
      <Link href="..">
        <Ionicons
        size={25}
        name="arrow-back-outline"
        color={theme.title}
        />
      </Link>
      </Pressable>
      <View style={styles.userInfo}>
        <Image
        style={styles.avatar}
        source={{uri: chat.user.avatar}}
        />
        <View style={styles.userDetails}>
          <ThemedText title={true}
          style={styles.name}>
            {chat.user.name}
          </ThemedText>
          <ThemedText style={[{color: theme.text}, styles.userStatus]}>
            {user ? "online" : "offline" }
          </ThemedText>
        </View>
      </View>
      
      <View style={styles.headerButtons}>
        <Pressable
        style={({pressed})=> [styles.callIcon, pressed && styles.iconPressed]}>
          <Ionicons
          size={25}
          name="call-outline"
          color={theme.title}
          />
        </Pressable>
        <Pressable
        style={({pressed})=> [styles.optionsIcon, pressed && styles.iconPressed]}>
          <Ionicons
          size={25}
          name="ellipsis-horizontal"
          color={theme.title}
          />
        </Pressable>
      </View>
    </ThemedView>
    }
    </>
    )
  
  
  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}>
    
    {/*Messages List*/}
      <FlatList
      ListHeaderComponent={ScreenHeader}
      showsVerticallScrollIndicator={false}
      contentContainerStyle={[{backgroundColor: theme.background ,paddingTop: insets.top, paddingBottom: insets.bottom}, styles.messages]}
      keyExtractor={(item) => item.id}
      data={conversation && conversation.messages}
      renderItem={({item})=> (
        <MessageCard
        key={item.chatId}
        category={item.category}
        message={item.text}
        sender={item.sender}
        type={item.type}
        timestamp={item.timestamp}
        read={item.read}
        />
      )}
      />
      
      <ThemedView style={[{
      paddingBottom: insets.bottom + 5},
      styles.addMessageWrapper]}>
        <View style={[{backgroundColor: theme.resIconColor},
        styles.inputWrapper, messageValue && styles.hasMessage]}>
          <TextInput
          style={[{color: "#fff"},
          styles.addMessageInput]}
          placeholder="write a message..."
          multiline={true}
          blurOnSubmit={false}
          value={messageValue}
          onChangeText={setMessageValue}
          />
          <View style={styles.iconsWrapper}>
            <View style={styles.emojiIcon}>
            <Ionicons
            size={30}
            name="happy-outline"
            color={theme.text}
            />
            </View>
          </View>
        </View>
        <Pressable style={({pressed})=> [styles.sendBtn, pressed && styles.iconPressed]}>
          <View style={styles.sendIcon}>
          <Ionicons
          size={25}
          name="send"
          color={theme.title}
          />
          </View>
        </Pressable>
      </ThemedView>
      
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17
  },
  userStatus: {
    fontSize: 14
  },
  
  //header buttons
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  
  //messages
  messages: {
    paddingHorizontal: 15,
    gap: 20
  },
  //pressed icon style
  iconPressed: {
    opacity: 0.5
  },
  
  //input
  addMessageWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 5,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    paddingHorizontal: 3,
    borderRadius: 50,
    paddingVertical: 6,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },
  hasMessage: {
    paddingHorizontal: 3,
    borderRadius: 10,
    paddingVertical: 6,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 10
  },
  addMessageInput: {
    width: "80%"
  },
  emojiIcon: {
    marginRight: 5,
  },
  //send btn
  sendBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  sendIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});