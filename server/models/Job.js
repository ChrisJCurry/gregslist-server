import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    jobTitle: {type: String, required: true},
    company: {type: String, required:true},
    rate: {type: Number, required:true, default: 30},
    hours: {type: Number, required: true},
    description: {type: String, required: true, default: "This job has no description."}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
