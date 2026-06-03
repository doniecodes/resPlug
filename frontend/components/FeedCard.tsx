import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { StyleSheet, Text, View, SafeView, Image, Pressable } from "react-native";

import { Link } from "expo-router";

import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import pic5 from "../assets/images/pic5.jpg";
import image1 from "../assets/images/doniecode.png";

const FeedCard = () => {
  
  //states
  const [ user, setUser ] = useState({
    username: "@doniecode",
    res: "Monroe Gardens Res"
  });
  const [ liked, setLiked ] = useState(false);
  const [ desc, setDesc ] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //current time
  const currentTime = ". 2h ago";
  
  const subDesc = desc.substring(0, 50);
  
  //description read more function
  const handleMore = ()=> {
    
  }
  
  return (
    <ThemedView style={styles.card}>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerLeft}>
        <Image source={image1} style={styles.userImage} />
        <View style={styles.userInfo}>
          <ThemedText title={true} style={styles.name}>
            {user.username}
          </ThemedText>
          <ThemedText style={styles.res}>
            <Ionicons
            size={13}
            name="business-outline"
            />
            <Text>
              {user.res}
            </Text>
          </ThemedText>
        </View>
        </View>
        
        <View style={styles.infoContainerRight}>
          <Pressable>
            <Ionicons
            size={25}
            name="ellipsis-vertical"
            color={theme.title}
            />
          </Pressable>
        </View>
      </View>
      
      <View style={styles.cardChips}>
        <Text style={styles.chip}>
          <Ionicons
          size={12}
          name="book-outline"
          color="inherit"
          />
          <Text>Study</Text>
        </Text>
        <Text style={styles.chip}>
          <Ionicons
          size={12}
          name="pizza-outline"
          color="inherit"
          />
          <Text>Food</Text>
        </Text>
      </View>
      
      <View style={styles.postContent}>
        <Image source={pic5} style={styles.postImage} />
        <ThemedText title={true}
        style={styles.postTitle}>
          Come learn to code at block 4
        </ThemedText>
        <ThemedText style={styles.postDescription}>
         { desc.length > 50 ?
         <ThemedText>
           {subDesc}
            <ThemedText
            style={{
            color: "#717b89", 
            fontWeight: '500',
            }}>...</ThemedText>
          </ThemedText> :
          <ThemedText>{desc}</ThemedText> }
        </ThemedText>
      </View>
      
      <View style={styles.buttons}>
        <Pressable style={styles.likeBtn}
        onPress={()=> setLiked((prev)=> !prev)}>
          <Ionicons
          size={25}
          name={liked ? "heart": "heart-outline"}
          color={liked ? "red": "red"}
          />
          <View style={styles.btnText}>
            <ThemedText title={true}
            style={styles.textBold}>
              Like
            </ThemedText>
            <ThemedText style={styles.btnCount}>21</ThemedText>
          </View>
        </Pressable>
        <Pressable style={styles.replyBtn}>
          <Ionicons
          size={25}
          name="chatbubble-ellipses-outline"
          color="#4a77a3"
          />
          <View style={styles.btnText}>
            <ThemedText title={true}
            style={styles.textBold}>
              Reply
            </ThemedText>
            <ThemedText style={styles.btnCount}>9</ThemedText>
          </View>
        </Pressable>
        <Pressable style={styles.reshareBtn}>
          <Ionicons
          size={25}
          name="sync"
          color="#94bb8e"
          />
          <View style={styles.btnText}>
            <ThemedText title={true}
            style={styles.textBold}>
              RePlug
            </ThemedText>
            <ThemedText style={styles.btnCount}>6</ThemedText>
          </View>
        </Pressable>
      </View>
      
    </ThemedView>
  );
};
export default FeedCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.10)',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 5,
  },
  infoContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'cnter',
    gap: 5
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#222',
  },
  userInfo: {
    flexDirection: 'column',
    gap: 3,
    marginLeft: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  res: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
    color: "#717b89",
    fontWeight: '500',
    gap: 4
  },
  cardChips: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 20
  },
  chip: {
    backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    alignItems: "center",
    gap: 4,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  infoContainerRight: {
    
  },
  postContent: {
    flexDirection: 'column',
    gap: 5
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 6
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    //marginLeft: 5
  },
  postDescription: {
    width: "90%",
    fontSize: 16,
    paddingBottom: 3,
    //marginLeft: 5,
  },
  
  //Feed Buttons
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    gap: 20,
    marginTop: 3,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderColor: "#d4d4d4",
    paddingLeft: 10
  },
  likeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  reshareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  replyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  btnText: {
    flexDirection: 'column',
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: "-4"
  },
  btnCount: {
    fontSize: 10,
  }
});