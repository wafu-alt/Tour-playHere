import { Schema } from 'mongoose';

const ContinentSchema = new Schema(
  {
    continent_name: {
      type: String,
      required: true,
    }
  },
  {
    collection: 'continents',
    timestamps: true,
  }
)

export { ContinentSchema }