import { StyleSheet, Text, View, Button, Pressable, Alert, Image } from 'react-native';
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons"
import addImageIcon from "../assets/images/add-image3.png"

const ImagePickerComponent = ({ width = 150, height = 120, multiple=false, ...props }) => {
  
  //states
  const [ image, setImage ] = useState<string | null>(null);
  
  const pickImage = async ()=> {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if(!permissionResult.granted) {
      Alert.alert("Permission required", "permission to access the media library is denied");
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    
    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }
  
  return (
    <>
      <View style={[{width, height}, styles.container, !image && styles.border]}>
        { !image ?
        <Pressable
        style={({pressed})=> [
        styles.btn, pressed && styles.pressed
        ]}
        onPress={props.pickImage}>
          <Image
          style={styles.icon}
          source={addImageIcon}
          />
        <Text style={styles.text}>
        Add image
        </Text>
        </Pressable>
        :
        <Image
        source={{uri: image}}
        style={[{width, height}, styles.image]}
        />}
      </View>
    </>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    borderWidth: 1.6,
    borderRadius: 10,
    borderColor: '#d5d5d5',
  },
  icon: {
    width: 50,
    height: 50
  },
  image: {
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  pressed: {
    opacity: 0.5
  }
});