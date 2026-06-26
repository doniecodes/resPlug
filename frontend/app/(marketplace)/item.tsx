import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


const itemScreen = () => {
  
  //states
  const { id } = useLocalSearchParams()
  
  return (
    <View>
      <Text>Item {id}</Text>
    </View>
  );
};

export default itemScreen;

const styles = StyleSheet.create({});