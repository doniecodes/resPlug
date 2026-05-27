import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const RootLayout = ()=> {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto"/>
      <Stack screenOptions = {{
        headerStyle: {
          backgroundColor: theme.navBackground
        },
        headerTintColor: theme.title
      }}>
        
        <Stack.Screen name="index" options={{title: "Home", headerShown: false}} />
        
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        
      </Stack>
    </>
)
}
export default RootLayout;