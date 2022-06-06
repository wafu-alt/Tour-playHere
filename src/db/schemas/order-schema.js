import { Schema } from "mongoose";

const OrderSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  totalNumber: {
    type: Number,
    required: true,
  },
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
  registerDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

export { OrderSchema };
