import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, ActivityIndicator } from 'react-native-paper';

const riverData = {
    name: 'Colorado River',
    condition: 'Normal',
    level: '3.2 ft',
    flow: '1200 cfs',
    temperature: '15°C',
    updatedAt: '2024-06-12 10:30 AM',
};

const RiverConditionScreen: React.FC = () => {
    const [loading, setLoading] = React.useState(false);

    // Placeholder for fetching data
    // React.useEffect(() => {
    //   setLoading(true);
    //   // fetch river data here
    //   setLoading(false);
    // }, []);

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="River Condition" />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.content}>
                {loading ? (
                    <ActivityIndicator animating={true} size="large" />
                ) : (
                    <Card>
                        <Card.Title title={riverData.name} subtitle={`Last updated: ${riverData.updatedAt}`} />
                        <Card.Content>
                            <Title>Condition: {riverData.condition}</Title>
                            <Paragraph>Level: {riverData.level}</Paragraph>
                            <Paragraph>Flow: {riverData.flow}</Paragraph>
                            <Paragraph>Temperature: {riverData.temperature}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => {}}>Refresh</Button>
                        </Card.Actions>
                    </Card>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    content: {
        padding: 16,
        flexGrow: 1,
        justifyContent: 'center',
    },
});

export default RiverConditionScreen;