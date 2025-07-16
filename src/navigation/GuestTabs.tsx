import React from 'react';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapScreen from '@/screens/MapScreen';
import ChatScreen from '@/screens/ChatScreen';
import PhotoScreen from '@/screens/PhotoScreen';
import PosterScreen from '@/screens/PosterScreen';
import { FloaterTabParamList } from '@/types/navigation';

const Tab = createBottomTabNavigator<FloaterTabParamList>();

const FloaterTabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
        tabBar={({navigation, state, descriptors, insets}) => (
            <BottomNavigation.Bar
                navigationState={state}
                safeAreaInsets={insets}
                onTabPress={({route, preventDefault}) => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (event.defaultPrevented) {
                        preventDefault();
                    } else {
                        navigation.dispatch({
                            ...CommonActions.navigate(route.name, route.params),
                            target: state.key
                        })
                    }
                }}
                renderIcon={({route, focused, color}) => 
                    descriptors[route.key].options.tabBarIcon?.({
                        focused, 
                        color, 
                        size: 24,
                    }) || null
                }
                getLabelText={({route}) => descriptors[route.key].route.name}
            />
        )}
    >
        <Tab.Screen
        name='Poster'
        component={PosterScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="business" size={size} color={color} />
            }
        }}
        />
    </Tab.Navigator>
);

export default FloaterTabs;