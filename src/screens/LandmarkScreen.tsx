import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<AdminTabParamList, 'Landmark'>;

const LandmarkScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Landmarks" />
            </Appbar.Header>
            <View style={styles.container}>
                <Card>
                    <Card.Title title="Landmark Example" />
                    <Card.Content>
                        <Text>This is the Landmark screen.</Text>
                    </Card.Content>
                </Card>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default LandmarkScreen;