import mongoose, { Schema } from 'mongoose';
import { IUser } from './ModelTypes/user.js';

// Create the User schema
const userSchema: Schema<IUser> = new mongoose.Schema({
  UserID: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: false,
  },
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    enum: ['admin', 'saler', 'store', 'guest'],
    required: true,
    default: 'guest',
  },
});

// Export the User model with the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

export default User;
