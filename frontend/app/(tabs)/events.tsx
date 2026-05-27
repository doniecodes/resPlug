import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

const Events = () => {
  return (
    <>
    <ThemedView style={globalStyles.container}>
      <ThemedText title={true}>Events page</ThemedText>
      
    </ThemedView>
    </>
  );
};

export default Events;

const styles = StyleSheet.create({});