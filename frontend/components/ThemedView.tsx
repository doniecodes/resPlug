import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets, SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme()
  //const theme = Colors[colorScheme] ?? Colors.light
  const theme = Colors.light

  if (!safe) return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )

  const insets = useSafeAreaInsets()

  return (
    <View 
      style={[{ 
        backgroundColor: theme.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }, style]} 
      {...props}
    />
    
    // <SafeAreaView
    //   style={[{ 
    //     backgroundColor: theme.background,
    //   }, style]} 
    //   {...props}
    // />
  )
}

export default ThemedView