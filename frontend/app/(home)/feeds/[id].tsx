import FeedComments from '../../../components/FeedComments';
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView';
import FeedsHook from "../../../hooks/FeedsHook";

import { StyleSheet, useColorScheme, ScrollView, Pressable, Alert, Image, View, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from '../../../constants/Colors'

import { Link, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";


import pic5 from "../../../assets/images/pic5.jpg";
import doniecode from "../../../assets/images/doniecode.png";

const Feed = () => {
  
  //fetch feed
  useEffect(()=> {
    const getData = async ()=> {
      try {
        const data = await getFeeds(id);
        setFeed(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])
  
  //states
  const { id } = useLocalSearchParams()
  const [ user, setUser ] = useState({
    username: "@doniecode"
  });
  const [ liked, setLiked ] = useState(false);
  const [ inputValue, setInputValue ] = useState("");
  
  const { getFeeds, error, loading } = FeedsHook();
  const [ feed, setFeed ] = useState(null);
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //current time
  const currentTime = ". 2h ago";
  
  const subDesc = feed && feed.description.substring(0, 50);
  const desc = feed && feed.description;
  const categories = feed && feed.categories;
  
  //description read more function
  const insets = useSafeAreaInsets();
  
  const [ paddingValue, setPaddingValue ] = useState(0);
  
  //send comment function
  const sendComment = async ()=> {
    
  }
  
  return (
    <>
    { feed &&
    <KeyboardAvoidingView
    enabled={true}
    behavior={Platform.OS === "ios" ? "padding" : "height" }
    style={{ flex: 1 }}>
      
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[{backgroundColor: theme.background, paddingBottom: insets.bottom + 70}, styles.container]}
    >
    <ThemedView style={styles.card}>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerLeft}>
          <Image source={doniecode} style={styles.userImage} />
          <View style={styles.userInfo}>
            <View style={styles.nameWrapper}>
          <ThemedText title={true} style={styles.name}>
            @{feed.user.username}
          </ThemedText>
            <ThemedText style={[{color: "#666"}, styles.time]}>
             . 2d
            </ThemedText>
            </View>
            
          <View style={styles.res}>
            <Ionicons
            size={13}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {feed.user.residence}
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
      
      {/*Title here*/}
      <View style={styles.titleWrapper}>
        <ThemedText title={true}
        style={styles.postTitle}>
          {feed.title}
        </ThemedText>
      </View>
      
      <View style={styles.postContent}>
        <Image source={pic5} style={styles.postImage} />
        <ThemedText style={styles.postDescription}>
         { desc && desc.length > 200 ?
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
          <ThemedText title={true} style={styles.btnCount}>
            {feed.stats.likes}
          </ThemedText>
        </Pressable>
        <Pressable style={styles.replyBtn}>
          <Ionicons
          size={25}
          name="chatbubble-ellipses-outline"
          color="#4a77a3"
          />
            <ThemedText title={true} style={styles.btnCount}>
              {feed.stats.replies}
            </ThemedText>
        </Pressable>
        <Pressable style={styles.reshareBtn}>
          <Ionicons
          size={25}
          name="sync"
          color="#94bb8e"
          />
            <ThemedText title={true} style={styles.btnCount}>
              {feed.stats.replugs}
            </ThemedText>
        </Pressable>
      </View>
      
    </ThemedView>
    
    {/*Comments start here*/}
    <FeedComments feed={feed} />
    </ScrollView>
    
    {/*comment input box*/}
      <ThemedView style={[{paddingBottom: insets.bottom + paddingValue }, styles.addCommentSection]}>
      <View style={[{backgroundColor: theme.inputBackground}, styles.addCommentWrapper]}>
        <View style={styles.inputWrapper}>
          <Image style={styles.addCommentAvatar}
          source={doniecode}
          />
          <TextInput
          style={styles.addCommentInput}
          placeholder="write a comment..."
          value={inputValue}
          onChangeText={setInputValue}
          returnKeyType="send"
          onSubmitEditing={sendComment}
          />
        </View>
        <View style={styles.iconsWrapper}>
          <View style={styles.icon}>
          <Ionicons
          size={30}
          name="happy-outline"
          color={theme.text}
          />
          </View>
        </View>
        </View>
      </ThemedView>
      </KeyboardAvoidingView>
    }
      
    </>
  );
};
export default Feed;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingHorizontal: 0,
    position: "relative",
  },
  card: {
    paddingVertical: 10,
    borderRadius: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.10), -0px -5px 20px rgba(0, 0, 0, 0.10)',
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
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    fontWeight: '400',
    fontSize: 15,
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
    paddingTop: 4,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#d4d4d4",
  },
  likeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    gap: 1
  },
  reshareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    gap: 1
  },
  replyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    gap: 1
  },
  btnCount: {
    fontSize: 14,
    fontWeight: '400',
  },
  optionsBtn: {
    paddingHorizontal: 3,
    paddingVertical: 3,
  },
  pressed: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 3,
    borderRadius: 8,
  },
  
    //Add Comment Section
  addCommentSection: {
    width: "100%",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1.5,
    borderColor: '#d5d5d5',
    //boxShadow: "5px 0px 90px 20px rgba(0, 0, 0, 0.5)"
  },
  addCommentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //gap: 10,
    borderRadius: 50,
  },
  inputWrapper: {
    width: "70%",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addCommentInput: {
    width: "100%",
  },
  addCommentAvatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.primary,
  },
  iconsWrapper: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    paddingHorizontal: 5
  }
  
});