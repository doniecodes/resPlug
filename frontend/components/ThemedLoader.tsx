import { StyleSheet, ActivityIndicator,
  useColorScheme } from 'react-native';
  import { Colors } from '../constants/Colors';
import ThemedView from './ThemedView';

const ThemedLoader = () => {
  
  const colorScheme = useColorScheme();
  const theme = Colors[useColorScheme] ?? Colors.light;
  
  return (
    <ThemedView style = {styles.container}>
      <ActivityIndicator 
      size = "large"
      color = {theme.text}
      />
    </ThemedView>
  );
};

export default ThemedLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});