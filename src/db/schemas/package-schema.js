import { Schema } from 'mongoose';

const PackageSchema = new Schema(
 {
     pacakge_name: {
        type: String,
        required: true,
    },
    category_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    days: {
        type: String,
        required: true,
    },
    departure_date: {
        type: Date,
        required: true,
    },
    arrival_date: {
        type: Date,
        required: true,
    },
    total_number: {
        type: Number,
        required: true,
    },
 },{
    collection: 'packages',
    timestamps: true,
 }
);

export { PackageSchema };