import { Schema } from 'mongoose';


const PackageSchema = new Schema(
    {
    
      packageName: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      days: {
        type: Number,
        required: true,
      },
      departure: {
        type: Date,
        required: true,
      },
      arrival: {
        type: Date,
        required: true,
      },
      totalNumber: {
        type: Number,
        required: true,
      },
     
    
    }

  );
  
  export { PackageSchema };
  