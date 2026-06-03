import { StyleSheet, Image, View,
useColorScheme } from 'react-native';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import ThemedLoader from '../components/ThemedLoader';


const SplashScreen = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light;

  
  return (
    <ThemedView style={styles.container}>
      
      <View style={styles.img}><Text>image here</Text></View>
      
      <ThemedText title={true}
      style={styles.title}>
        resPlug
      </ThemedText>
      
      <ThemedText>
        Plug into student life
      </ThemedText>
  
      <ThemedLoader />
      
    </ThemedView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 10
  },
  img: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "50%",
    height: "40%",
    marginVertical: 10
  }
});