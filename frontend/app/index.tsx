import { StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { Link } from "expo-router";

import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import Signup from './(auth)/signup';

import logo from '../assets/images/resplug.png';


const Home = () => {
  
  const colorScheme = useColorScheme()
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    <>
      
    <ThemedView safe={true} style={styles.container}>
      
      <Image source={logo}
      style={styles.logo} />
      <ThemedText title={true} style={styles.heading}>
        res
        <ThemedText title={true} style={styles.subHeading}>
        Plug
        </ThemedText>
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
  subHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6D28B9",
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.underline,
    marginVertical: 10,
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius: 6,
    borderColor: "#6D28B9",
    borderWidth: 2,
  }
});