import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import { StyleSheet, Text, View } from 'react-native';

const MessageCard = ({category, message,
  sender, type, timestamp, read
}) => {
  
  return (
    <ThemedView>
      
     { sender === "them" ?
      <ThemedText style={styles.themMessage}>
          {message}
      </ThemedText>
      :
      <ThemedText style={[styles.meMessage, message.unread && styles.unreadMessage]}>
        {message}
      </ThemedText>
      }
      
    </ThemedView>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  themMessage: {
    backgroundColor: '#717b89',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 50,
    color: "#fff",
    alignSelf: 'flex-start',
  },
  
  meMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#6D28B9',
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: "#fff",
    borderRadius: 50,
  },
  
});