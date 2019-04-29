const mongoose = require('mongoose');
const { ExerciseSchema } = require('./exercise');
const { DietSchema } = require('./diet');


const StatMessageSchema = new mongoose.Schema({
  from: {
    type: String,
  },
  exerciseLog: [ExerciseSchema],
  dietLog: [DietSchema],
});

const StatMessage = mongoose.model('StatMessage', StatMessageSchema);

module.exports = {
  StatMessage,
  StatMessageSchema,
};
