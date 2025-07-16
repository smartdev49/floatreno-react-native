import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button, Card,Text } from 'react-native-paper';
import UserCard from '@/components/UserCard';
import { USER_TYPE_METAS, UserTypeMeta } from '@/constants/users';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import useAuthStore from '@/store/useAuthStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
    
    const {isLoggedIn, logout} = useAuthStore();
    const [userType, setUserType] = React.useState<number>(0);
    React.useEffect(() => {
        if (!isLoggedIn) {
            navigation.navigate('Login')
        }
    }, [isLoggedIn]);
    const handleLogout = async() => {
        try {
            await logout();
        } catch (e) {
            console.log('Login Failed');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Card>
                <Card.Cover source={require('@/assets/icon.png')} style={{ width: 150, height: 150, borderRadius: 8 }}/>
            </Card>
            <Text variant="headlineMedium" style={{color: "rgb(32, 148, 243)", fontWeight: "700"}}>Welcome to the Float Reno App!</Text>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                {
                    USER_TYPE_METAS.map((u: UserTypeMeta) => (
                        <UserCard key={u.id} icon={u.icon} title={u.title} content={u.content} selected={userType === u.id} onSelect={() => setUserType(u.id)}/>
                    ))
                }
            </View>
            <View style={{flexDirection: "row",  justifyContent: 'center', alignItems: 'center'}}>                
                <Button mode='contained' onPress={() => navigation.navigate('Floater')}>Floater</Button>
                <Button mode='contained' onPress={() => navigation.navigate('Admin')}>Admin</Button>
                <Button mode='contained' onPress={() => navigation.navigate('Guest')}>Guest</Button>
                <Button mode='contained' onPress={() => handleLogout()}>Logout</Button>
            </View>
        </SafeAreaView>
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
});

export default HomeScreen;