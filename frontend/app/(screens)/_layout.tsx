import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors';

import { useSafeAreaInsets, SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const _layout = () => {
  
   //colorScheme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  return (
    <>
      <StatusBar style="dark-content" hidden={false}/>
      <Stack screenOptions = {{
      animation: "none",
        headerStyle: {
          backgroundColor: theme.background
        },
        headerTintColor: theme.title
      }}>
        
        <Stack.Screen
        name = "settings"
        options = {{title: "Settings"}}
        />
        
        <Stack.Screen
        name = "sell-item"
        options = {{title: "Sell Item",
          headerShown: false
        }}
        />
        
      </Stack>
    </>
  );
};

export default _layout;