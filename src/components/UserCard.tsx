import React from 'react';
import { StyleSheet} from 'react-native';
import { Card, Paragraph, Avatar } from 'react-native-paper';

type UserCardProps = {
    title?: string;
    content?: string;
    icon?: string;
    selected?: boolean;
    onSelect?: () => void;
};

const UserCard: React.FC<UserCardProps> = ({ title, content, icon, selected = false, onSelect}) => {
    const Icon = (props: any) => <Avatar.Icon {...props} icon={icon} />;

    return (
        <Card style={[styles.card, selected && styles.selected]} onPress={onSelect}>
            <Card.Title title={title} left={Icon} />
            <Card.Content>
                <Paragraph>{content}</Paragraph>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 5,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#ffffff00"
    },
    selected: {
        borderColor: '#6200ee',
    },
});

export default UserCard;