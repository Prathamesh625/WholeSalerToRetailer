import mongoose, { Document, Schema } from 'mongoose';

// Define the Product interface
export interface Product extends Document {
    ProductID: string;
    ProductName: string;
    IsAvailable: boolean;
    Price: number;
    Quantity: number;
}

// Create the Product schema
const productSchema: Schema = new mongoose.Schema({
    ProductID: {
        type: String,
        unique: true,
        required: true,
    },
    ProductName: {
        type: String,
        required: true,
    },
    IsAvailable: {
        type: Boolean,
        default: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
});

const ProductModel = mongoose.model<Product>('Product', productSchema);
export default ProductModel;
