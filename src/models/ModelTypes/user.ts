import { Document } from "mongoose";

export interface IUser extends Document {
    UserID?: string;
    Name?: string;
    Username: string;
    Email: string;
    PhoneNo: string;
    Password: string;
    Role: 'admin' | 'saler' | 'store' | 'guest';
}
