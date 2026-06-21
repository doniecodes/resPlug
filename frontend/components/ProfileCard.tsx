import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { StyleSheet, Text,
View, Image, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import doniecode from '../assets/images/doniecode.png';

const ProfileCard = () => {
  
  //states
  const fullName = "Donald Zarura";
  const username = "doniecode";
  
  //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    <ThemedView style={styles.cardWrapper}>
      <View style={styles.imageWrapper}>
        <Image
        style={styles.avatar}
        source={doniecode} />
        <View style={styles.cameraIcon}>
          <Ionicons
          size={18}
          name="camera"
          color="purple"
          />
        </View>
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
    borderColor: "purple",
    //borderColor: "#c9c9c9",
    borderRadius: 100,
    position: "absolute",
    bottom: 15,
    right: -5
  },
  avatar: {
    width: 90,
    height: 90,
    borderWidth: 2,
    //borderColor: 'purple',
    borderColor: '#e1e1e1',
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