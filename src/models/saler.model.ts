import mongoose, { Document, Schema } from 'mongoose';

// Define the Wholesaler interface extending Mongoose Document

export interface Wholesaler extends Document {
    WholesalerID: string;
    User: mongoose.Schema.Types.ObjectId; // Reference to User
    Product: mongoose.Schema.Types.ObjectId[]; // Array of references to Product
}

// Define the Wholesaler schema
const wholesalerSchema: Schema = new mongoose.Schema({
    WholesalerID: {
        type: String,
        unique: true,
        required: true,
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
});

// Export the model
const WholesalerModel = mongoose.model<Wholesaler>('Wholesaler', wholesalerSchema);
export default WholesalerModel;
