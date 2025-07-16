import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const photos = [
    // Replace with your photo URIs
    { id: '1', uri: 'https://placekitten.com/400/400' },
    { id: '2', uri: 'https://placekitten.com/401/400' },
    { id: '3', uri: 'https://placekitten.com/402/400' },
    { id: '4', uri: 'https://placekitten.com/403/400' },
];

const PhotoScreen: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedPhoto(item.uri)}>
                        <Image source={{ uri: item.uri }} style={styles.photo} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.list}
            />
            <Modal visible={!!selectedPhoto} transparent animationType="fade">
                <View style={styles.modalBackground}>
                    <TouchableOpacity style={styles.modalClose} onPress={() => setSelectedPhoto(null)}>
                        <Image source={{ uri: selectedPhoto || '' }} style={styles.modalPhoto} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    list: { padding: 8 },
    photo: {
        width: '95%',
        aspectRatio: 1,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#eee',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalPhoto: {
        width: 300,
        height: 300,
        borderRadius: 12,
    },
    modalClose: {
        padding: 16,
    },
});

export default PhotoScreen;