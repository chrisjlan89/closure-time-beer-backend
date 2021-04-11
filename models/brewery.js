"use strict";
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const brewerySchema = new mongoose.Schema(
  {
    name: { type: String },
    brewery_type: { type: String },
    street: { type: String },
    address_2: { type: String },
    address_3: { type: String },
    city: { type: String },
    state: { type: String },
    county_province: { type: String },
    postal_code: { type: String },
    country: { type: String },
    phone: { type: Number },
    website_url: { type: String },
    lng: { type: Number },
    lat: { type: Number },
    formatted_address: { type: String },
    place_id: { type: String },
    user_ratings_total: { type: Number },
    business_status: { type: String },
    price_level: { type: Number },
    rating: { type: Number },
    //
    opening_hours: { type: ObjectId, ref: "BreweryHours" },
    photos: { type: ObjectId, ref: "BreweryPhotos" },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Brewery || mongoose.model("Brewery", brewerySchema);
