import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabParamList } from '@/types/navigation';

type EmergencyScreenProps = NativeStackScreenProps<AdminTabParamList, 'Emergency'>;

const EmergencyScreen: React.FC<EmergencyScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title="Emergency" />
                <Card.Content>
                    <Text>If you are experiencing an emergency, please contact the appropriate authorities immediately.</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode="contained"
                        onPress={() => {
                            // Example: navigate to emergency contacts screen
                            // navigation.navigate('');
                        }}
                    >
                        View Emergency Contacts
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default EmergencyScreen;