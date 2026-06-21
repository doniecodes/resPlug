import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { View, Text, StyleSheet } from 'react-native';

const ProfileBio = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Software Developer. Building resPlug, one step at a time
      </ThemedText>
    </ThemedView>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  }
})