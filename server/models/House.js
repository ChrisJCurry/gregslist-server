import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    bedrooms: {type: Number, required: true, default: 3},
    bathrooms: {type: Number, required: true, default: 3},
    levels: {type: Number, required: true, default: 1},
    price: {type: Number, required: true, default: "1000000"},
    imgUrl: {type: String, required: true, default: "http://placehold.it/200x200"},
    description: {type: String, required: true, default: "This house has no description"},
    year: {type: Number, required: true, default: "1999"}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;
