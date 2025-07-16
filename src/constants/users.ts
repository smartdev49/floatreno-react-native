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
    {id: 0, icon: "", title: "Admin", content: ""},
    {id: 1, icon: "", title: "Float Master", content: ""},
    {id: 2, icon: "", title: "Floater", content: ""},
    {id: 3, icon: "", title: "Guest", content: ""},
]