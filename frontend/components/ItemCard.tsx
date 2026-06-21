import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { StyleSheet, Text,
 View, Image, Pressable } from 'react-native';

import laptop from "../assets/images/laptop.jpg"

import { useState } from "react";

import { Ionicons } from "@expo/vector-icons"

const ItemCard = ({id, title, price, images, seller, resId, category, description
  }) => {
    
    const [ favoured, setFavoured ] = useState(false);
    
    
  return (
    <View style={styles.card}>
      
      <View style={styles.imageWrapper}>
      <Image source={laptop} style={styles.image} />
      <Pressable
      style={styles.heartBtn}
      onPress = {()=> setFavoured((prev)=> !prev)}>
        <Ionicons
        size={22}
        name={favoured ? "heart" : "heart-outline"}
        color={favoured ? "purple" : "purple"}
        />
      </Pressable>
      </View>
      
      <View style={styles.contentWrapper}>
        <ThemedText title={true} style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText title={true} style={styles.price}>
          R{price}
        </ThemedText>
        
        <View style={styles.infoWrapper}>
          <View style={styles.locationWrapper}>
          <View style={styles.locationIcon}>
          <Ionicons
          name="location-outline"
          size={15}
          color="#333"
          />
          </View>
          <Text style={styles.locationText}>{resId}</Text>
          </View>
          
          <ThemedText
          style={styles.username}>
            @doniecode
          </ThemedText>
          
        </View>
      </View>
      
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    maxWidth: 200,
    
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.10)',
    marginBottom: 20,
    //position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  contentWrapper: {
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  infoWrapper: {
    flexDirection: 'row',
    gap: 15
  },
  locationWrapper: {
    flexDirection: 'row',
    gap: 3
  },
  title: {
    fontWeight: 500,
    fontSize: 16
  },
  price: {
    fontWeight: 500,
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 13,
    color: "#717b89",
    fontWeight: '600',
  },
  locationText: {
  },
  locationIcon: {
    
  }
});