export enum UserType {
    Admin = 0,
    FloatMaster = 1,
    Floater = 2,
    Guest = 3,
}

export const USER_TYPE_LABELS: { [key in UserType]: string } = {
    [UserType.Admin]: 'Admin',
    [UserType.FloatMaster]: 'Float Master',
    [UserType.Floater]: 'Floater',
    [UserType.Guest]: 'Guest',
};

export type UserTypeMeta = {
    id: number;
    icon: string;
    title: string;
    content: string;
};

export const USER_TYPE_METAS: UserTypeMeta[] = [
    {id: 0, icon: "manage-accounts", title: "Admin", content: "Admin"},
    {id: 1, icon: "leaderboard", title: "Float Master", content: "Master"},
    {id: 2, icon: "user", title: "Floater", content: "Floater"},
    {id: 3, icon: "guest", title: "Guest", content: "Guest"},
]