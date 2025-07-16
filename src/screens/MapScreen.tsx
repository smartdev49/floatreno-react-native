import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const MapScreen: React.FC = () => {
    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <UrlTile
                    /**
                     * OpenStreetMap tile server (fair use only)
                     * You can replace this with another provider
                     */
                    urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maximumZ={19}
                    flipY={false}
                />
                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
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