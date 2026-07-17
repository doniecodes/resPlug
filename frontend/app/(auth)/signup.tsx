import { StyleSheet, Text, View,
Keyboard, TouchableWithoutFeedback,
useColorScheme, Pressable, Image } from 'react-native';

import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";

import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

import UserForms from "../../hooks/UserForms";

import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import GoogleImage from "../../assets/images/google.png";

import { supabase } from "../../data/supabase";

import * as Crypto from "expo-crypto";


const signup = () => {
  
  //colorscheme
  const colorScheme = useColorScheme()
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const id = Crypto.randomUUID();
  
  //hooks
  const { signupUser, error, loading } = UserForms();
  
  const handleSubmit = async () => {
    const username = email && email.split("@")[0];
    const full_name = email && email.split("@")[0];
    await signupUser(id, email, password, username);
    }
    
  //google auth
  const handleGoogleSubmit = async ()=> {
    
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      
      <ThemedText title={true} style={styles.heading}>
        Create a resPlug account
      </ThemedText>
      
      <Spacer height={40} />
      
      <ThemedText style={styles.label}>
        Email:
      </ThemedText>
      <ThemedTextInput
      style={[{borderWidth: 1.5, borderColor: Colors.primary, color: theme.title}, styles.textInput]}
      name="email"
      placeholder="Email address"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />
      {error && error.includes("email") &&
      <Text style={styles.error}>
        {error}
      </Text>
      }
      <Spacer height={10} />
      
      <ThemedText style={styles.label}>
        Password:
      </ThemedText>
      <ThemedTextInput
      style={[{borderWidth: 1.5, borderColor: Colors.primary, color: theme.title}, styles.textInput]}
      name="password"
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      {error && error.includes("password") &&
      <Text style={styles.error}>
        {error}
      </Text>
      }
      {error && error.includes("fields") &&
      <Text style={styles.error}>
        {error}
      </Text>
      }
      <Spacer height={30} />
      
      <ThemedButton onPress={handleSubmit}>
        <Text style={{color: "#fff"}}>
          Create account
        </Text>
      </ThemedButton>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      
      <Spacer height={10} />
      <Pressable
      style={({pressed})=> [styles.googleBtn, pressed && styles.pressed]}
      onPress={handleGoogleSubmit}>
        <Image
        style={styles.googleImage}
        source={GoogleImage}
        />
        <ThemedText style={styles.googleBtnText}>
          Sign in with Google
        </ThemedText>
      </Pressable>
      
      <Spacer height={20} />
      <View style={styles.flex}>
        <ThemedText>
          resPlug user?
        </ThemedText>
        <Link href="/login">
          <ThemedText style={{fontWeight: "bold"}}> Login
          </ThemedText>
        </Link>
      </View>
      
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  textInput: {
    width: "80%",
    borderRadius: 50,
  },
  label: {
    width: "80%",
    textAlign: "left",
    marginBottom: 3
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16
  },
  flex: {
    flexDirection: 'row',
  },
  
  //OR
  orContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#d4d4d4",
  },

  orText: {
    marginHorizontal: 16,
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "600",
  },
  googleImage: {
    width: 30,
    height: 30
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderWidth: 1.5,
    borderColor: "#d4d4d4",
    borderRadius: 6,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  pressed: {
    opacity: 0.5
  }
});