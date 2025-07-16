import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PosterScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Poster</Text>
            <Image
                source={{ uri: 'https://via.placeholder.com/300x450?text=Poster' }}
                style={styles.poster}
                resizeMode="cover"
            />
            <Text style={styles.description}>
                This is a sample poster description. You can customize this screen to display poster details, images, and more.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    poster: {
        width: 300,
        height: 450,
        borderRadius: 12,
        marginBottom: 24,
        backgroundColor: '#eee',
    },
    description: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
    },
});

export default PosterScreen;