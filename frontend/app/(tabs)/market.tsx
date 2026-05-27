import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

const Market = () => {
  return (
    <>
    <ThemedView style={globalStyles.container}>
      <ThemedText title={true}>Market page</ThemedText>
      
    </ThemedView>
    </>
  );
};

export default Market;

const styles = StyleSheet.create({});