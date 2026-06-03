import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from "../../constants/Colors";


const AuthLayout = () => {
  
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  
  return (
    <>
      <StatusBar style="dark-content" hidden={false}/>
      <Stack screenOptions = {{
        animation: "none",
        headerStyle: {
          backgroundColor: theme.navBackground
        },
        headerTintColor: theme.text
      }}>
        
        <Stack.Screen name="login" options={{title: "Login", headerShown: false}} />
        <Stack.Screen name="signup" options={{title: "Signup", headerShown: false}} />
        
      </Stack>
    </>
  );
  
};

export default AuthLayout;