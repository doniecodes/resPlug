import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

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
      mediaTypes: ["images", "videos"],
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
      <View style={[{}, styles.container]}>
        <Button
        title="pick an image from gallery"
        onPress={pickImage}
        />
        {image &&
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
  image: {
    borderRadius: 10
  }
});