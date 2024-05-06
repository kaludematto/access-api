export interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    document: string;
    picture: string;
    phone: string;
    job: string;
    can_approve: boolean;
    admin: boolean;
    auth: string;
}

export interface IUserToCreate {
    name: string;
    email: string;
    password: string;
    document: string;
    picture: string;
    phone: string;
    job: string;
    can_approve: boolean;
    admin: boolean;
}
