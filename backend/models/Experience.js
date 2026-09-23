const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    technologies: {
      type: [String],
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience