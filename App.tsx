/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Provider as PaperProvider} from 'react-native-paper';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/types/navigation';

import HomeScreen from '@/screens/HomeScreen';
import LoginScreen from "@/screens/LoginScreen";
import SignupScreen from "@/screens/SignupScreen";
import FloaterTabs from '@/navigation/FloaterTabs';
import AdminTabs from '@/navigation/AdminTabs';
import GuestTabs from '@/navigation/GuestTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Floater' component={FloaterTabs}/>
          <Stack.Screen name='Admin' component={AdminTabs}/>
          <Stack.Screen name='Guest' component={GuestTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
