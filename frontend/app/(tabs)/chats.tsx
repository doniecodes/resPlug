import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

const Chats = () => {
  return (
    <>
    <ThemedView style={globalStyles.container}>
      <ThemedText title={true}>Chats page</ThemedText>
      
    </ThemedView>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({});