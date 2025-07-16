import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

const MapScreen: React.FC = () => {

    const [location, setLocation] = useState<{
        latitude: number;
        longitude: number;
        altitude?: number | null;
        accuracy?: number | null;
        altitudeAccuracy?: number | null;
        heading?: number | null;
        speed?: number | null;
    } | null>(null);

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    }
    useEffect(() => {
        (async () => {
            const hasPermission = await requestLocationPermission();
            if (!hasPermission) return;

            Geolocation.getCurrentPosition(
                position => {
                    return setLocation(position.coords);
                },
                error => {
                    console.error(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        })();
    }, [])
    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion} 
                    showsUserLocation>
                <UrlTile
                    /* OpenStreetMap tile server (fair use only)
                     * You can replace this with another provider
                     */
                    urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maximumZ={19}
                    flipY={false}
                />
                {location && <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />}
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