import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

export default function ThemedTextInput({ style, ...props }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <TextInput 
      style={[
        {
          backgroundColor: theme.inputBackground, 
          color: theme.title,
          padding: 20,
          borderRadius: 6,
        }, 
        style
      ]}
      {...props}
    />
  )
}