import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

const Home = () => {
  return (
    <>
    <ThemedView style={globalStyles.container}>
      <ThemedText title={true}>Home page</ThemedText>
      
    </ThemedView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});