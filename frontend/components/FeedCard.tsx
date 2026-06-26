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
     <View style={styles.chipIcon}>
          { categories[0] === "Study" &&
              <Ionicons
              size={13}
              name="book-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Food" &&
              <Ionicons
              size={13}
              name="pizza-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Entertainment" &&
              <Ionicons
              size={13}
              name="film-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Fitness" &&
              <Ionicons
              size={13}
              name="fitness-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Social" &&
              <Ionicons
              size={13}
              name="people-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Marketplace" &&
              <Ionicons
              size={13}
              name="pricetag-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Gaming" &&
              <Ionicons
              size={13}
              name="game-controller-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Tech" &&
              <Ionicons
              size={13}
              name="laptop-outline"
              color={theme.title}
              />
              }
          { categories[0] === "Music" &&
              <Ionicons
              size={13}
              name="musical-notes-outline"
              color={theme.title}
              />
              }
          </View>
          <ThemedText style={styles.chipName}>
            {categories[0]}
          </ThemedText>
        </View>
        
          { categories[1] !== null && categories.length !== 1 &&
        <View style={styles.chip}>
            <View style={styles.chipIcon}>
          { categories[1] === "Study" &&
              <Ionicons
              size={13}
              name="book-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Food" &&
              <Ionicons
              size={13}
              name="pizza-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Entertainment" &&
              <Ionicons
              size={13}
              name="film-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Fitness" &&
              <Ionicons
              size={13}
              name="fitness-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Social" &&
              <Ionicons
              size={13}
              name="people-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Marketplace" &&
              <Ionicons
              size={13}
              name="pricetag-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Gaming" &&
              <Ionicons
              size={13}
              name="game-controller-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Tech" &&
              <Ionicons
              size={13}
              name="laptop-outline"
              color={theme.title}
              />
              }
          { categories[1] === "Music" &&
              <Ionicons
              size={13}
              name="musical-notes-outline"
              color={theme.title}
              />
              }
            </View>
            <ThemedText style={styles.chipName}>
              {categories[1]}
            </ThemedText>
        </View>
              }
      </View>
      {/*Chips ends here*/}
      
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
    paddingVertical: 10,
    borderRadius: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.10), -0px -5px 20px rgba(0, 0, 0, 0.10)',
    marginBottom: 0,
  },
  infoContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 5,
  },
  infoContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: '600',
    color: "#717b89",
  },
  cardChips: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
    marginHorizontal: 10,
  },
  chip: {
    backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    alignItems: "center",
    gap: 4,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 50
  },
  chipIcon: {
    marginBottom: -1,
  },
  postContent: {
    flexDirection: 'column',
    gap: 5
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 0,
    marginTop: 6
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  postDescription: {
    width: "90%",
    fontSize: 16,
    paddingBottom: 3,
    marginHorizontal: 10
  },
  
  //Feed Buttons
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    gap: 20,
    marginTop: 3,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "#d4d4d4",
  },
  likeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 5,
  },
  reshareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 5,
  },
  replyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 5,
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