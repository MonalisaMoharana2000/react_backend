const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    stopName: { type: String, required: true },
    stopAddress: { type: String, required: true },
    lattitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    pickupPrice: { type: Number, required: true },
    dropPrice: { type: Number, required: true },
    createdOn: { type: Date, default: Date.now },
  },
  { collection: "posts" }
);

module.exports = mongoose.model("Post", postSchema);
