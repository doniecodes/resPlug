import { StyleSheet, Text } from 'react-native';
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { Link } from "expo-router";

import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import Signup from './(auth)/signup';


const Home = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light;
  
  return (
    <>
      {/*<Signup />*/}
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        resPlug
      </ThemedText>
      
      <ThemedText>
        Plug into student life
      </ThemedText>.
      
      <Spacer height={100} />
      
      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      
      <Spacer height={10} />

      <Link href="/signup" style={styles.link}>
        <ThemedText>Signup</ThemedText>
      </Link>
      
      <Spacer height={10} />
      
      <Link href="/home" style={styles.link}>
        <ThemedText>profile</ThemedText>
      </Link>
      
    </ThemedView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.underline,
    marginVertical: 10,
  }
});