import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { StyleSheet, Text, View, Image } from 'react-native';

import laptop from "../assets/images/laptop.jpg"

import { Ionicons } from "@expo/vector-icons"

const FeaturedCard = ({id, title, price, images, seller,
  resId}) => {
    
    
  return (
    <View style={styles.card}>
      <Image source={laptop} style={styles.image} />
      <View style={styles.gradient}></View>
      
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.price}>
          R{price}
        </Text>
        <View style={styles.locationWrapper}>
          <View style={styles.locationIcon}>
          <Ionicons
          name="location-outline"
          size={13}
          color="#fff"
          />
          </View>
          <Text style={styles.locationText}>{resId}</Text>
        </View>
      </View>
      
    </View>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 170,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  gradient: {
    borderRadius: 10,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.620)',
  },
  contentWrapper: {
    position: "absolute",
    bottom: 10,
    left: 10,
    gap: 6
  },
  locationWrapper: {
    flexDirection: 'row',
    gap: 3
  },
  title: {
    color: "#fff"
  },
  price: {
    color: "#fff",
    fontWeight: 'bold',
  },
  locationText: {
    color: "#fff"
  },
  locationIcon: {
    marginBottom: -10,
  }
});