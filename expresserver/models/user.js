const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ExerciseSchema } = require('./exercise');
const { DietSchema } = require('./diet');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  exerciseLog: [ExerciseSchema],
  dietLog: [DietSchema],
  statMessages: [],
});

// hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

// authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email })
    .exec((err, user) => {
      if (err) {
        return callback(err);
      } if (!user) {
        const unknownUserErr = new Error('User not found.');
        unknownUserErr.status = 401;
        return callback(unknownUserErr);
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          return callback(null, user);
        }
        return callback();
      });
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema,
  User,
};
