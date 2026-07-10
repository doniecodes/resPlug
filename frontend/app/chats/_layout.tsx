import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors';

const ChatsLayout = () => {
  
  //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    
    <>
    <StatusBar style="dark-content" hidden={false} value="auto" />
      <Stack screenOptions = {{
      animation: "none",
        headerStyle: {
          backgroundColor: theme.background
        },
        headerTintColor: theme.title
      }}>
        
        <Stack.Screen
        name = "[id]"
        options = {{title: "Chat Details",
          headerShown: false
        }}
        />
      </Stack>
    </>
  );
};

export default ChatsLayout;

const styles = StyleSheet.create({
  
});