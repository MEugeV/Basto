const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cattleSchema = new Schema({
  _id: {
    type: String,
    required: [true, "Senasa ID is required"],
    maxLength: [16, "Senasa ID must have 16 characters"],
    minLength: [16, "Senasa ID must have 16 characters"],
    match: [/^[a-zA-Z0-9]+$/, "Senasa ID must be alphanumeric"],
  },
  animal_type: {
    type: String,
    enum: ["Novillo", "Toro", "Vaquillona"],
    required: [true, "Animal type is required"],
  },
  animal_weight: { type: Number },
  paddock_name: {
    type: String,
    maxLength: 200,
    required: [true, "Paddock name is required"],
  },
  device_type: {
    type: String,
    enum: ["COLLAR", "CARAVANA"],
    required: [true, "Device type is required"],
  },
  device_number: {
    type: String,
    maxLength: [8, "Device number must have 8 characters"],
    minLength: [8, "Device number must have 8 characters"],
    required: [true, "Device number is required"],
    match: [/^[a-zA-Z0-9]+$/, "device number must be alphanumeric"],
  },
});

module.exports = mongoose.model("cattle", cattleSchema);
