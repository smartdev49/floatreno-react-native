import { FloaterTabParamList } from '@/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

type Props = NativeStackScreenProps<FloaterTabParamList, 'Chat'>;


const ChatScreen: React.FC<Props> = ({navigation}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim() === '') return;
        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
        };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: `Echo: ${userMessage.text}`,
                sender: 'bot',
            };
            setMessages(prev => [...prev, botMessage]);
        }, 500);
    };

    const renderItem = ({ item }: { item: Message }) => (
        <View style={[
            styles.messageContainer,
            item.sender === 'user' ? styles.userMessage : styles.botMessage
        ]}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

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
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type a message..."
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
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
        padding: 16,
    },
    messageContainer: {
        marginVertical: 4,
        padding: 10,
        borderRadius: 8,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: '#EAEAEA',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 8,
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fafafa',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    sendButton: {
        marginLeft: 8,
        backgroundColor: '#007AFF',
        borderRadius: 20,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ChatScreen;