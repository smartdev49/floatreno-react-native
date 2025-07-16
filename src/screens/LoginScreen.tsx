import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';

//
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;


const LoginScreen: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate("Home");
        // if (email && password) {
        //     Alert.alert('Login Successful', `Welcome, ${email}!`);
        // } else {
        //     Alert.alert('Error', 'Please enter email and password.');
        // }
    };

    return (
        <View style={styles.container}>     
            {/* <Image source={require('@/assets/icon.png')} style={{ width: 150, height: 150, borderRadius: 8, marginHorizontal: 'auto' }} /> */}
            <View>
                <Text variant="displayMedium" style={{fontWeight: 700}}>Hello.</Text>
                <Text variant="displayMedium">Welcome Back</Text>
            </View>            
            <View style={{display: "flex", gap: 36,}}>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Button mode="contained" onPress={handleLogin} style={styles.button}>
                    Login
                </Button>
                <Button
                    mode="text"
                    onPress={() => navigation.navigate('Signup')}
                    style={{marginTop: 18}}
                    labelStyle={{color: '#1976d2', fontSize: 18}}
                >
                Not registered? Sign up
            </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 36,
        paddingVertical: 60,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        marginTop: 8,
        paddingVertical: 4,
    },
});

export default LoginScreen;