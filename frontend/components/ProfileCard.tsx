import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { useState } from 'react'

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { StyleSheet, Text,
View, Image, Pressable, Alert } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import * as ImagePicker from "expo-image-picker";

import doniecode from '../assets/images/doniecode.png';

const ProfileCard = () => {
  
  //states
  const fullName = "Donald Zarura";
  const username = "doniecode";
  const [ avatar, setAvatar ] = useState<string | null>(null);
  
  //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  const handleAvatar = async ()=> {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if(!permissionResult.granted){
      Alert.alert("Permission required", "permission to access the media library is denied");
    }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        selectionLimit: 1,
        aspect: [16, 16],
        quality: 1
      });
      
      if(!result.canceled){
        setAvatar(result.assets[0].uri);
      }
  }
  
  return (
    <ThemedView style={styles.cardWrapper}>
      <View style={styles.imageWrapper}>
        <Image
        style={styles.avatar}
        source={{ uri: avatar }} />
        <Pressable
        onPress={handleAvatar}
        style={styles.cameraIcon}>
          <Ionicons
          size={18}
          name="camera"
          color="#6D28B9"
          />
        </Pressable>
      </View>
      
      <View style={styles.contentWrapper}>
        <View style={styles.nameWrapper}>
          <ThemedText title={true}
          style={styles.fullName}>
            {fullName}
          </ThemedText>
          <ThemedText
          style={styles.username}>
            @{username}
          </ThemedText>
        </View>
        
        <View style={styles.statsWrapper}>
          <View style={styles.stat}>
            <ThemedText style={styles.statCount}>
              19
            </ThemedText>
            <ThemedText style={styles.statName}>
              Posts
            </ThemedText>
          </View>
          <View style={styles.stat}>
            <ThemedText style={styles.statCount}>
              120
            </ThemedText>
            <ThemedText style={styles.statName}>
              Reputation
            </ThemedText>
          </View>
          <View style={styles.stat}>
            <ThemedText style={styles.statCount}>
              7
            </ThemedText>
            <ThemedText style={styles.statName}>
              Plugs
            </ThemedText>
          </View>
        </View>
        
      </View>
      
    </ThemedView>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    gap: 20
  },
  imageWrapper: {
    position: "relative"
  },
  cameraIcon: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: "#6D28B9",
    //borderColor: "#c9c9c9",
    borderRadius: 100,
    position: "absolute",
    bottom: 3,
    right: -6
  },
  avatar: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: '#d4d4d4',
    borderRadius: 100,
  },
  contentWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
  nameWrapper: {
    flexDirection: 'column',
    gap: 0
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  username: {
    fontSize: 14,
    color: "#717b89",
    fontWeight: "500"
  },
  statsWrapper: {
    borderWidth: 1.5,
    borderColor: "#e1e1e1",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30,
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  stat: {
    flexDirection: "column",
    gap: 0
  },
  statName: {
    marginTop: "-1"
  },
  statCount: {
    fontSize: 17,
    fontWeight: "700"
  }
});