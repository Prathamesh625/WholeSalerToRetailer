import mongoose from 'mongoose';
// Create the User schema
const userSchema = new mongoose.Schema({
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
        enum: ['admin', 'user', 'guest'],
        required: true,
        default: 'guest',
    },
});
// Export the User model with the IUser interface
const User = mongoose.model('User', userSchema);
export default User;
