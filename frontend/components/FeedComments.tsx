import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { StyleSheet, useColorScheme, ScrollView, Pressable, Alert, Image, View, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from '../constants/Colors'

import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";


import pic5 from "../assets/images/pic5.jpg";
import doniecode from "../assets/images/doniecode.png";

const FeedComments = ({feed}) => {
  
    const [ liked, setLiked ] = useState(false);
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
    //description read more function
  
  return (
    <>
    <ThemedView style={styles.commentsSection}>
      <View style={styles.headingWrapper} >
        <ThemedText title={true} style={styles.heading}>
          Comments ({feed.stats.replies})
        </ThemedText>
        <Pressable style={({pressed})=> [
        styles.viewAllBtn, pressed && styles.viewAllBtnPressed
          ]}>
          <ThemedText title={true} style={styles.viewAllBtnText}>
            View all {feed.stats.replies}
          </ThemedText>
        </Pressable>
      </View>
      
      <View style={styles.comments}>
        <View style={styles.comment}>
          <View style={styles.commentInfoFlex}>
          <Image source={doniecode} style={styles.commentAvatar} />
          <View style={styles.commentInfo}>
            <View style={styles.commentPosterWrapper}>
          <ThemedText title={true} style={styles.commentPoster}>
            @{feed.user.username}
          </ThemedText>
            <ThemedText style={[{color: "#666"}, styles.time]}>
             . 2d
            </ThemedText>
            </View>
            
          <View style={styles.res}>
            <Ionicons
            size={12}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {feed.user.residence}
            </Text>
          </View>
          </View>
          </View>
          
          <ThemedText style={styles.commentText}>
            Will there be laptops available?
          </ThemedText>
          
        </View>
        <View style={styles.comment}>
          <View style={styles.commentInfoFlex}>
          <Image source={doniecode} style={styles.commentAvatar} />
          <View style={styles.commentInfo}>
            <View style={styles.commentPosterWrapper}>
          <ThemedText title={true} style={styles.commentPoster}>
            @{feed.user.username}
          </ThemedText>
            <ThemedText style={[{color: "#666"}, styles.time]}>
             . 2d
            </ThemedText>
            </View>
            
          <View style={styles.res}>
            <Ionicons
            size={12}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {feed.user.residence}
            </Text>
          </View>
          </View>
          </View>
          
          <ThemedText style={styles.commentText}>
            Will there be laptops available?
          </ThemedText>
          
        </View>
        <View style={styles.comment}>
          <View style={styles.commentInfoFlex}>
          <Image source={doniecode} style={styles.commentAvatar} />
          <View style={styles.commentInfo}>
            <View style={styles.commentPosterWrapper}>
          <ThemedText title={true} style={styles.commentPoster}>
            @{feed.user.username}
          </ThemedText>
            <ThemedText style={[{color: "#666"}, styles.time]}>
             . 2d
            </ThemedText>
            </View>
            
          <View style={styles.res}>
            <Ionicons
            size={12}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {feed.user.residence}
            </Text>
          </View>
          </View>
          </View>
          
          <ThemedText style={styles.commentText}>
            Will there be laptops available?
          </ThemedText>
          
        </View>
        <View style={styles.comment}>
          <View style={styles.commentInfoFlex}>
          <Image source={doniecode} style={styles.commentAvatar} />
          <View style={styles.commentInfo}>
            <View style={styles.commentPosterWrapper}>
          <ThemedText title={true} style={styles.commentPoster}>
            @{feed.user.username}
          </ThemedText>
            <ThemedText style={[{color: "#666"}, styles.time]}>
             . 2d
            </ThemedText>
            </View>
            
          <View style={styles.res}>
            <Ionicons
            size={12}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {feed.user.residence}
            </Text>
          </View>
          </View>
          </View>
          
          <ThemedText style={styles.commentText}>
            Will there be laptops available?
          </ThemedText>
          
        </View>
        <View style={styles.comment}>
          <View style={styles.commentInfoFlex}>
          <Image source={doniecode} style={styles.commentAvatar} />
          <View style={styles.commentInfo}>
            <View style={styles.commentPosterWrapper}>
          <ThemedText title={true} style={styles.commentPoster}>
            @{feed.user.username}
          </ThemedText>
            <ThemedText style={[{color: "#666"}, styles.time]}>
             . 2d
            </ThemedText>
            </View>
            
          <View style={styles.res}>
            <Ionicons
            size={12}
            name="business-outline"
            color={theme.resIconColor}
            />
            <Text style={styles.resName}>
              {feed.user.residence}
            </Text>
          </View>
          </View>
          </View>
          
          <ThemedText style={styles.commentText}>
            Will there be laptops available?
          </ThemedText>
          
        </View>
      </View>
      </ThemedView>
    </>
  );
};

export default FeedComments;

const styles = StyleSheet.create({
  
  //Comments Section
  commentsSection: {
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  headingWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    gap: 20,
    paddingBottom: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
  viewAllBtnPressed: {
    opacity: 0.5
  },
  viewAllBtnText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 13,
    //borderBottomWidth: 1,
    //borderColor: Colors.primary,
  },
  
  //Comments
  Comments: {
    paddingBottom: 50,
    flexDirection: 'column',
    gap: 5
  },
  comment: {
    flexDirection: 'column',
    gap: 0,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  commentInfoFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#222',
  },
  commentInfo: {
    flexDirection: 'column',
    gap: 0,
    marginLeft: 5
  },
  commentPosterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  commentPoster: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  time: {
    fontWeight: '400',
    fontSize: 14,
  },
  res: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3
  },
  resName: {
    fontSize: 12,
    fontWeight: '600',
    color: "#717b89",
  },
  commentText: {
    width: "90%",
    paddingVertical: 0,
    paddingLeft: 35
  },
});