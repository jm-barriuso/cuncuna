const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
title: {
    type: String,
    required: [true, "El titulo es obligatorio"],
},
authore: {
    type: String,
    required: [true, "El autor es obligatorio"],
},
ilustrator: {
    type: String,
    required: [true, "El autor es obligatorio"],
},
number: {
    type: Number,
    required: [true, "El autor es obligatorio"],
},
description: {
    type: String,
    required: [true, "debes agregar un descripcion"]
},
img:{
    type: String,
    required: [true, "La portada es obligatorio"],
}
},{timestamps:true});

const Review = mongoose.model("Review",reviewSchema);

module.exports = {reviewSchema,Review};