import { StyleSheet, Text,
Keyboard, TouchableWithoutFeedback,
useColorScheme } from 'react-native';

import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";

import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

import UserForms from "../../hooks/UserForms";

import { useState } from "react";


const signup = () => {
  
    //colorscheme
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light;
  
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  
  //hooks
  const { signupUser, error, loading } = UserForms();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupUser(email, password, fullName);
    }
    
    const underlineColor = theme === "dark" ? "#fff" : "#111";
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      
      <ThemedText title={true} style={styles.heading}>
        Create a resPlug account
      </ThemedText>
      
      <Spacer height={40} />
      
      <ThemedText style={styles.label}>
        Full Name:
      </ThemedText>
      <ThemedTextInput
      style={styles.textInput}
      name="fullName"
      placeholder="Full Name"
      value={fullName}
      onChangeText={setFullName}
      />
      <Spacer height={10} />
      
      <ThemedText style={styles.label}>
        Email:
      </ThemedText>
      <ThemedTextInput
      style={styles.textInput}
      name="email"
      placeholder="Email address"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />
      {error && error.includes("email") ?
      <Text style={styles.error}>{error}</Text> : null
      }
      <Spacer height={10} />
      
      <ThemedText style={styles.label}>
        Password:
      </ThemedText>
      <ThemedTextInput
      style={styles.textInput}
      name="password"
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      {error && error.includes("password") ?
      <Text style={styles.error}>{error}</Text> : null
      }
      {error && error.includes("fields") ?
      <Text style={styles.error}>{error}</Text> : null
      }
      <Spacer height={30} />
      
      <ThemedButton onPress={handleSubmit}>
        <Text style={{color: "#fff"}}>Create account</Text>
      </ThemedButton>
      
      <Spacer height={20} />
      <ThemedText>
        Already have an account?
        <Link href="/login" style={[{borderBottomColor: underlineColor}, styles.linked]}>
          <ThemedText style={{fontWeight: "bold"}}>  Login</ThemedText>
        </Link>
      </ThemedText>
      
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
  linked: {
    borderBottomWidth: 1
  },
  textInput: {
    width: "80%"
  },
  label: {
    width: "80%",
    textAlign: "left",
    marginBottom: 3
  },
  error: {
    color: "red",
  }
});