import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Switch, Button, Text, List, useTheme } from 'react-native-paper';

const SettingScreen: React.FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const theme = useTheme();

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text variant="headlineLarge" style={styles.header}>Settings</Text>

            <List.Item
                title="Enable Notifications"
                right={() => (
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />
                )}
                style={styles.settingRow}
            />

            <List.Item
                title="Dark Mode"
                right={() => (
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                    />
                )}
                style={styles.settingRow}
            />

            <Button
                mode="contained"
                style={styles.button}
                onPress={() => {/* handle logout */}}
            >
                Log Out
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
    },
    header: {
        marginBottom: 32,
        alignSelf: 'center',
    },
    settingRow: {
        marginBottom: 16,
    },
    button: {
        marginTop: 40,
        borderRadius: 8,
        paddingVertical: 6,
    },
});

export default SettingScreen;
