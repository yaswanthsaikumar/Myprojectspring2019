const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Diet = mongoose.model('Diet', DietSchema);

module.exports = {
  DietSchema,
  Diet,
};