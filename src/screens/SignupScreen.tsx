import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { TextInput as PaperTextInput, Button, Text } from 'react-native-paper';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        navigation.navigate("Home")
        // if (!email || !password || !confirmPassword) {
        //     Alert.alert('Error', 'Please fill all fields.');
        //     return;
        // }
        // if (password !== confirmPassword) {
        //     Alert.alert('Error', 'Passwords do not match.');
        //     return;
        // }
        // // TODO: Implement signup logic here
        // Alert.alert('Success', 'Account created!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <PaperTextInput
                style={styles.input}
                label="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
            />
            <PaperTextInput
                style={styles.input}
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                mode="outlined"
            />
            <PaperTextInput
                style={styles.input}
                label="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                mode="outlined"
            />
            <Button mode="contained" onPress={handleSignup} style={{marginTop: 8}}>
                Sign Up
            </Button>
            <Button
                mode="text"
                onPress={() => navigation.navigate('Login')}
                style={{marginTop: 16}}
                labelStyle={{color: '#1976d2'}}
            >
                Already have an account? Log In
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
        backgroundColor: '#fff',
    },
});

export default SignupScreen;
