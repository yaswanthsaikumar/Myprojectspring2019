const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
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

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = {
  ExerciseSchema,
  Exercise,
};