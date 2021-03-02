import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    make: { type: String, required: true },
    model: {type: String, required: true},
    description: { type: String},
    year: {type: Number, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true, default: "http://placehold.it/200x200"}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;
