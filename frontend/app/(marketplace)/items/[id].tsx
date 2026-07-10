import ThemedButton from '../../../components/ThemedButton';
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView';

import { useLocalSearchParams } from 'expo-router';
import { Link } from "expo-router";

import { StyleSheet, Text, View, Image, Pressable, Alert, useColorScheme, TextInput, ScrollView, KeyboardAvoidingView, Platform,
TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';

import doniecode from "../../../assets/images/doniecode.png";
import pic5 from "../../../assets/images/pic5.jpg";
import pic1 from "../../../assets/images/pic1.png";
import laptop from "../../../assets/images/laptop.jpg";

import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import MarketHook from "../../../hooks/MarketHook";

const itemScreen = () => {
  
  useEffect(()=> {
      const getData = async ()=> {
    try {
      const data = await getItems(id);
      setItemData(data);
    } catch (error) {
      console.log(error);
    }
    }
    getData();
  }, [])
  
  //states
  const { id } = useLocalSearchParams();
  const { getItems } = MarketHook();
  const [ message, setMessage ] = useState("");
  
  const [ itemData, setItemData ] = useState(null);
  const item = itemData !== null && itemData;
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //current time
  const currentTime = ". 2h ago";
  
  //send mesaage function
  const handleSubmit = async (e)=> {
    e.preventDefault();
  }
  
  const insets = useSafeAreaInsets();
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={[{backgroundColor: theme.background, paddingBottom: insets.bottom}, styles.container]}>
      
      <ThemedView style={styles.infoContainer}>
        
        <View style={styles.sellerInfo}>
          <Image style={styles.avatar}
          source={doniecode} />
          <View style={styles.sellerDetails}>
            <ThemedText title={true}
            style={styles.name}>
              {item.seller_name}
            </ThemedText>
            <View style={styles.resWrapper}>
            <View style={styles.resIcon}>
              <Ionicons
              size={13}
              name="business-outline"
              color={theme.resIconColor}
              />
            </View>
            <Text style={[{color: theme.resIconColor}, styles.resName]}>
              {item.res_id}
            </Text>
            </View>
          </View>
          <ThemedText style={styles.time}>
            {currentTime}
          </ThemedText>
        </View>
        
        <View style={styles.chips}>
          <View style={styles.chip}>
            <View style={styles.chipIcon}>
              { item.category === "Study" &&
              <Ionicons
              size={13}
              name="book-outline"
              color={theme.title}
              />
              }
              { item.category === "Electronics" &&
              <Ionicons
              size={13}
              name="flash-outline"
              color={theme.title}
              />
              }
              { item.category === "Clothes" &&
              <Ionicons
              size={13}
              name="shirt-outline"
              color={theme.title}
              />
              }
              { item.category === "Residence" &&
              <Ionicons
              size={13}
              name="business-outline"
              color={theme.title}
              />
              }
              { item.category === "Services" &&
              <Ionicons
              size={13}
              name="cash-outline"
              color={theme.title}
              />
              }
              { item.category === "Other" &&
              <Ionicons
              size={13}
              name=""
              color={theme.title}
              />
              }
            </View>
            <ThemedText>
              {item.category}
            </ThemedText>
          </View>
              {item.category !== "Services" &&
          <View style={styles.chip}>
            <ThemedText>
              {item.condition}
            </ThemedText>
          </View>
              }
        </View>
        
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.images}
        >
          <Image style={styles.image}
          source={pic1} />
          <Image style={styles.image}
          source={laptop} />
          <Image style={styles.image}
          source={pic5} />
        </ScrollView>
        
        <View style={styles.itemInfo}>
          <ThemedText title={true}
          style={styles.title}>
            {item.title}
          </ThemedText>
          <ThemedText title={true}
          style={styles.price}>
            R{item.price}
          </ThemedText>
        </View>
        
      </ThemedView>
      {/*Info container ends here*/}
      
      <ThemedView style={styles.detailsContainer}>
        
        <View style={styles.buttons}>
          <Pressable style={styles.button}>
            <View style={styles.icon}>
              <Ionicons
              size={25}
              name="notifications-outline"
              color={theme.title}/>
            </View>
            <ThemedText title={true}
            style={styles.iconName}>
              Alert
            </ThemedText>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.icon}>
              <Ionicons
              size={25}
              name="heart-outline"
              color="red"/>
            </View>
            <ThemedText title={true}
            style={styles.iconName}>
              Like
            </ThemedText>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.icon}>
              <Ionicons
              size={25}
              name="share-outline"
              color={theme.title}/>
            </View>
            <ThemedText title={true}
            style={styles.iconName}>
              Share
            </ThemedText>
          </Pressable>
        </View>
        
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.messageWrapper}>
          <ThemedText title={true} style={styles.label}>
            Message seller
          </ThemedText>
          <TextInput
          style={styles.textInput}
            multiline={true}
            maxLength={500}
            blurOnSubmit={false}
          //placeholder="Message seller"
          value={message}
          onChangeText={setMessage}
          />
          <ThemedButton
          style={styles.btn}
          onPress={handleSubmit}>
            <Text style={styles.btnText}>Send message</Text>
          </ThemedButton>
        </View>
        </KeyboardAvoidingView>
        
        <View style={styles.descriptionWrapper}>
          <ThemedText title={true}
          style={styles.descTitle}>
            Description
          </ThemedText>
          <ThemedText style={styles.descText}>
            {item.description}
          </ThemedText>
        </View>
      </ThemedView>
      
      <ThemedView style={[{paddingBottom: insets.bottom + 20} ,styles.safetyContainer]}>
          <ThemedText title={true}
          style={styles.safetyTitle}>
            Safety Note
          </ThemedText>
        <ThemedText style={styles.safetyText}>
          Meet in a public place on campus.
          Never pay before inspecting the item.
        </ThemedText>
      </ThemedView>
      
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default itemScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  infoContainer: {
    paddingVertical: 10,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: '#222',
  },
  sellerDetails: {
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  resWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  resName: {
    color: "#717b89",
    fontSize: 13,
    fontWeight: '600',
  },
  //Seller Info ends here
  
  //Item chips starts here
  chips: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    paddingHorizontal: 10,
  },
  chip: {
    backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    alignItems: "center",
    gap: 4,
    paddingVertical: 1.5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  chipIcon: {
    marginBottom: -1,
  },
  
  //Images starts here
  images: {
    alignItems: 'center',
    gap: 5,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  //Item name and price
  itemInfo: {
    flexDirection: 'column',
    gap: 2,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: '600',
    fontSize: 18
  },
  price: {
    fontWeight: '600',
    fontSize: 18,
    color: "#6D28B9"
  },
  
  //Details starts here
  detailsContainer: {
    paddingHorizontal: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    paddingTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: "#d9d9d9",
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 100
  },
  iconName: {
    fontWeight: '600',
    fontSize: 16
  },
  messageWrapper: {
    borderWidth: 1.5,
    borderColor: "#d5d5d5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    gap: 10,
    marginVertical: 10,
  },
  label: {
    fontWeight: '600',
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: '#d9d9d9',
    borderRadius: 10
  },
  btn: {
    width: "100%",
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  btnText: {
    color: "#f8f8f8",
    fontWeight: "600",
    fontSize: 16,
    textAlign: 'center',
  },
  //description
  descTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  //Safety note
  safetyContainer: {
    paddingHorizontal: 15
  },
  safetyTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});