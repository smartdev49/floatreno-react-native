export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    lastActive: string;
    lastLocation: {lat: number, lng: number};
    role: string;
    groupId: string;
}