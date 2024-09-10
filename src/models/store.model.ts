import mongoose, { Document, Schema } from 'mongoose';

// Define the Store interface
export interface Store extends Document {
    User: mongoose.Schema.Types.ObjectId;
    StoreID: string;
    StoreName: string;
    Products: mongoose.Schema.Types.ObjectId[];
}

// Create the Store schema
const storeSchema: Schema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    StoreID: {
        type: String,
        unique: true,
        required: true,
    },
    StoreName: {
        type: String,
        required: true,
    },
    Products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
});

const StoreModel = mongoose.model<Store>('Store', storeSchema);
export default StoreModel;
