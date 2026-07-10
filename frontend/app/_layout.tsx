import { FeedsContextProvider }
from '../contexts/FeedsContext';
import { MarketContextProvider }
from '../contexts/MarketContext';
import { ChatsContextProvider }
from '../contexts/ChatsContext';
import { UserContextProvider }
from '../contexts/UserContext';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

import { useSafeAreaInsets, SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = ()=> {
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //insets
  const insets = useSafeAreaInsets();

  return (
    <>
      <ChatsContextProvider>
      <FeedsContextProvider>
      <MarketContextProvider>
      <UserContextProvider>
      <SafeAreaProvider>
      <StatusBar style="dark-content" hidden={false}/>
      <Stack screenOptions = {{
        animation: "none",
        headerStyle: {
          backgroundColor: theme.navBackground,
        },
        headerTintColor: theme.title
      }}>
        
        <Stack.Screen name="index" options={{title: "Home", headerShown: false}} />
        
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        
        <Stack.Screen name="(screens)" options={{headerShown: false}} />
        
        <Stack.Screen name="(marketplace)" options={{headerShown: false}} />
        
        <Stack.Screen name="(home)" options={{headerShown: false}} />
        
        <Stack.Screen name="chats" options={{headerShown: false}} />
        
      </Stack>
      </SafeAreaProvider>
      </UserContextProvider>
      </MarketContextProvider>
      </FeedsContextProvider>
      </ChatsContextProvider>
    </>
)
}
export default RootLayout;