import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

import useAuthStore from '@/store/useAuthStore';
//
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

import {ActivityIndicator} from 'react-native-paper';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;


const LoginScreen: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLoggedIn, isLoading, autoLogin} = useAuthStore();

    useEffect(() => {
        const checkLogin = async () => {
            if (isLoggedIn) {
                navigation.navigate("Home");
            } else {
                await autoLogin();
            }
        };
        checkLogin();
    }, [isLoggedIn])

    const handleLogin = async() => {
        try {
            await login(email, password);
        } catch (e) {
            console.log('Login Failed');
        }
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
                    {isLoading ? <ActivityIndicator animating={true} /> : "Login"}
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