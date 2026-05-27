import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  name: string;
  weight: string;
  location: string;
}

const Card = ({
  name,
  weight,
  location
}: CardProps ) => {
  return (
    <ThemedView>
      
      <ThemedText>
        Name is {name}
      </ThemedText>
      
      <ThemedText>
        weight is {weight}
      </ThemedText>
      
      <ThemedText>
        Location is {location}
      </ThemedText>
      
    </ThemedView>
  );
};

export default Card;

const styles = StyleSheet.create({});