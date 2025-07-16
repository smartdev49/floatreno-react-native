import { FloaterTabParamList } from '@/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  TextInput,
  Button,
  Surface,
  Text,
  Avatar,
  Provider as PaperProvider,
} from 'react-native-paper';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

type Props = NativeStackScreenProps<FloaterTabParamList, 'Chat'>;

const ChatScreen: React.FC<Props> = ({ navigation }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Echo: ${userMessage.text}`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  const renderItem = ({ item }: { item: Message }) => {
  const isUser = item.sender === 'user';
    return (
        <View
        style={[
            styles.messageWrapper,
            isUser ? styles.alignRight : styles.alignLeft,
        ]}
        >
        {!isUser && (
            <Avatar.Text size={32} label="B" style={styles.avatar} />
        )}
        <Surface
            style={[
            styles.messageContainer,
            isUser ? styles.userMessage : styles.botMessage,
            ]}
            elevation={2}
        >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
        </Surface>
        {isUser && (
            <Avatar.Text size={32} label="U" style={styles.avatar} />
        )}
        </View>
    );
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    keyboardVerticalOffset={80}
    >
    <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatContainer}
    />
    <View style={styles.inputContainer}>
        <TextInput
        mode="outlined"
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type a message..."
        />
        <Button
        mode="contained"
        onPress={sendMessage}
        style={styles.sendButton}
        contentStyle={{ height: 48 }}
        >
        Send
        </Button>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    padding: 12,
  },
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 6,
    maxWidth: '80%',
  },
  alignLeft: {
    alignSelf: 'flex-start',
  },
  alignRight: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  userMessage: {
    backgroundColor: '#D1EDC1',
  },
  botMessage: {
    backgroundColor: '#EAEAEA',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  sendButton: {
    borderRadius: 20,
  },
  avatar: {
    marginHorizontal: 6,
  },
});

export default ChatScreen;
