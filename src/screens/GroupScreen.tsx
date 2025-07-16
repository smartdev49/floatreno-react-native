import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabParamList } from '@/types/navigation';
import {Text, Card} from 'react-native-paper';
type GroupScreenProps = NativeStackScreenProps<AdminTabParamList, 'Group'>;

const GroupScreen: React.FC<GroupScreenProps> = () => {
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium'>Group Screen</Text>

            <Card style={{ width: '90%', marginTop: 20 }}>
                <Card.Title title="Group Info" />
                <Card.Content>
                <Text variant='headlineMedium'>
                    Add your group screen content here
                </Text>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default GroupScreen;