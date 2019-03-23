const mongoose = require('mongoose');

const ExcerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Excercise = mongoose.model('Excercise', ExcerciseSchema);

module.exports = {
  ExcerciseSchema,
  Excercise,
};