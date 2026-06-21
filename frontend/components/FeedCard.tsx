import FeedChips from './FeedChips';
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

const FeedCard = ({
  image, username, residence,
  title, desc, categories, stats, id
  }) => {
  
  //states
  const [ user, setUser ] = useState({
    username: "@doniecode",
    res: "Monroe Gardens Res"
  });
  const [ liked, setLiked ] = useState(false);
  
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
            @{username}
          </ThemedText>
          <View style={styles.res}>
            <Ionicons
            size={13}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {residence}
            </Text>
          </View>
          </View>
        </View>
        
        <View style={styles.infoContainerRight}>
          <Pressable
          style={({pressed})=> [styles.optionsBtn, pressed && styles.pressed]}
          >
            <Ionicons
            size={25}
            name="ellipsis-vertical"
            color={theme.title}
            />
          </Pressable>
        </View>
      </View>
      
      <View style={styles.cardChips}>
        <View style={styles.chip}>
          <FeedChips categories={categories} />
        </View>
      </View>
      
      <View style={styles.postContent}>
        <Image source={pic5} style={styles.postImage} />
        <ThemedText title={true}
        style={styles.postTitle}>
          {title}
        </ThemedText>
        <ThemedText style={styles.postDescription}>
         { desc && desc.length > 90 ?
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
            <ThemedText style={styles.btnCount}>{stats.likes}</ThemedText>
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
            <ThemedText style={styles.btnCount}>{stats.replies}</ThemedText>
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
            <ThemedText style={styles.btnCount}>{stats.replugs}</ThemedText>
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
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.10), -0px -5px 20px rgba(0, 0, 0, 0.10)',
    marginBottom: 10,
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
    gap: 3
  },
  resName: {
    fontSize: 13,
    fontWeight: '500',
    color: "#717b89",
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
    borderRadius: 10,
    //marginRight: 10,
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
  },
  optionsBtn: {
    paddingHorizontal: 3,
    paddingVertical: 3,
  },
  pressed: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 3,
    borderRadius: 8,
  }
});