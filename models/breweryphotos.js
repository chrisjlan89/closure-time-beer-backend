"use strict";
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const breweryPhotosSchema = new mongoose.Schema(
  {
    photos: [
      {
        height: { type: Number },
        html_attributions: [String],
        photo_reference: { type: String },
        width: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.breweryPhotosSchema ||
  mongoose.model("BreweryPhotos", breweryPhotosSchema);
