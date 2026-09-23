const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const About = mongoose.model('About', aboutSchema)

module.exports = About