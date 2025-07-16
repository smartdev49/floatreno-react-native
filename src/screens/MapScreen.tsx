import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

interface Coordinates {
    latitude: number;
    longitude: number
}

const MapScreen: React.FC = () => {

    const [location, setLocation] = useState<Coordinates | null>(null);

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true;
    }
    const startLocationTracking = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
            console.warn("Permission denied", "Cannot access location.");
            return;
        }

        Geolocation.getCurrentPosition(
            (position: GeolocationResponse) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            error => console.error(error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

        Geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            error => console.error(error),
            { enableHighAccuracy: true, distanceFilter: 10 }
        );
    };
    useEffect(() => {
        startLocationTracking();
    }, [])
    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const region: Region | undefined = location
    ? {
        ...location,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion}
                showsUserLocation>
                
                {location && <Marker coordinate={location!} title='You are here'/>}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;