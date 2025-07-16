import React from 'react';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapScreen from '@/screens/MapScreen';
import ChatScreen from '@/screens/ChatScreen';
import PhotoScreen from '@/screens/PhotoScreen';
import PosterScreen from '@/screens/PosterScreen';
import { AdminTabParamList } from '@/types/navigation';
import GroupScreen from '@/screens/GroupScreen';
import EmergencyScreen from '@/screens/EmergencyScreen';
import LandmarkScreen from '@/screens/LandmarkScreen';
import SettingScreen from '@/screens/SettingScreen';
import RiverConditionScreen from '@/screens/RiverConditionScreen';

const Tab = createBottomTabNavigator<AdminTabParamList>();

const AdminTabs = () => (
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
        name='Map'
        component={MapScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="map" size={size} color={color} />
            }
        }}
        />
        <Tab.Screen
        name='Group'
        component={GroupScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="group" size={size} color={color} />
            }
        }}
        />
        <Tab.Screen
        name='Emergency'
        component={EmergencyScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="emergency" size={size} color={color} />
            }
        }}
        />
        <Tab.Screen
        name='Landmark'
        component={LandmarkScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="map-marker" size={size} color={color} />
            }
        }}
        />
        <Tab.Screen
        name='Poster'
        component={PosterScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="business" size={size} color={color} />
            }
        }}
        />
        <Tab.Screen
        name='Setting'
        component={SettingScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="settings" size={size} color={color} />
            }
        }}
        />
        <Tab.Screen
        name='River'
        component={RiverConditionScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialIcons name="infor" size={size} color={color} />
            }
        }}
        />
    </Tab.Navigator>
);

export default AdminTabs;