const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile