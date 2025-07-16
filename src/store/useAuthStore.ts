import { create } from 'zustand';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from '@/types/user';

interface AuthState {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;

    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    autoLogin: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    isLoading: false,
    isLoggedIn: false,

    login: async (email: string, password: string) => {
        try {
            set({isLoading: true});

            /*
            const response = await fetch('LOGIN_API', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Login failed');
            */
           if (email !== "admin@gmail.com" || password !== "123") throw new Error('Login failed');

            /// this is mock data
            const data = {
                token: 'float-reno-access-token',
                user: {
                    id: '1',
                    name: 'admin',
                    email: 'admin@floatreno.com',
                    phone: '+1 323 916 4735',
                    lastActive: Date.now().toString(),
                    lastLocation: {
                        lng: 51.0921312,
                        lat: 192.2345112,
                    },
                    role: "admin",
                    groupId: '123',
                }
            }
            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('user', JSON.stringify(data.user));

            set({
                user: data.user,
                token: data.token,
                isLoggedIn: true,
                isLoading: false,
            });
        } catch (error) {
            set({isLoading: false});
            console.log('Login error:', error);
            throw error;
        }
    },

    logout: async () => {
        await AsyncStorage.clear();
        set({user: null, token: null, isLoggedIn: false});
    },

    autoLogin: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const userJson = await AsyncStorage.getItem('user');

            if (token && userJson) {
                const user = JSON.parse(userJson);
                set({token, user, isLoggedIn: true});
            }
        } catch (err) {
            console.error('Auto-login failed:', err);
        }
    },
}))

export default useAuthStore;