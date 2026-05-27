import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

const Profile = () => {
  return (
    <>
    <ThemedView style={globalStyles.container}>
      <ThemedText title={true}>Profile page</ThemedText>
      
    </ThemedView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});