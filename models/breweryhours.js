"use strict";
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const breweryHoursSchema = new mongoose.Schema(
  {
    open_now: { type: String },
    periods: [
      {
        close: {
          day: { type: Number },
          time: { type: String },
        },
        open: {
          day: { type: Number },
          time: { type: String },
        },
      },
    ],
    weekday_text: [String],
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.BreweryHours ||
  mongoose.model("BreweryHours", breweryHoursSchema);
