const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Contact = require('./models/Contact')
const Project = require('./models/Project')
const Skill = require('./models/Skill')
const Experience = require('./models/Experience')
const Education = require('./models/Education')
const About = require('./models/About')
const Service = require('./models/Service')
const Profile = require('./models/Profile')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

// ==============================
// Middleware
// ==============================

app.use(cors())
app.use(express.json())

console.log('Starting MongoDB connection...')

mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log('MongoDB connected successfully')
  })
  .catch((error) => {
    console.error('MongoDB connection FAILED')
    console.error(error.message)
  })

// ==============================
// Root API
// ==============================

app.get('/', (req, res) => {
  res.json({
    message: 'Kundan Portfolio Backend is running!',
  })
})

// ==============================
// Profile API
// ==============================


app.get('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne().sort({ createdAt: -1 })

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile information not found.',
      })
    }

    res.json(profile)
  } catch (error) {
    console.error('Error fetching profile:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile information.',
    })
  }
})

app.post('/api/profile', async (req, res) => {
  try {
    const {
      name,
      role,
      email,
      phone,
      location,
    } = req.body

    if (!name || !role || !email || !phone || !location) {
      return res.status(400).json({
        success: false,
        message: 'All profile fields are required.',
      })
    }

    const existingProfile = await Profile.findOne()

    if (existingProfile) {
      return res.status(409).json({
        success: false,
        message: 'Profile already exists.',
      })
    }

    const newProfile = new Profile({
      name,
      role,
      email,
      phone,
      location,
    })

    const savedProfile = await newProfile.save()

    console.log('Profile saved:', savedProfile._id)

    res.status(201).json({
      success: true,
      message: 'Profile created successfully.',
      data: savedProfile,
    })
  } catch (error) {
    console.error('Error creating profile:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create profile.',
    })
  }
})

// ==============================
// Projects API
// ==============================

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 })

    res.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects.',
    })
  }
})

// Create a new project
app.post('/api/projects', async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      github,
      demo,
    } = req.body

    if (!title || !description || !technologies) {
      return res.status(400).json({
        success: false,
        message: 'Title, description and technologies are required.',
      })
    }

    const newProject = new Project({
      title,
      description,
      technologies,
      github,
      demo,
    })

    const savedProject = await newProject.save()

    console.log('Project saved:', savedProject._id)

    res.status(201).json({
      success: true,
      message: 'Project created successfully.',
      data: savedProject,
    })
  } catch (error) {
    console.error('Error creating project:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create project.',
    })
  }
})

// ==============================
// Start Server
// ==============================

app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 })

    res.json(skills.map((skill) => skill.name))
  } catch (error) {
    console.error('Error fetching skills:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills.',
    })
  }
})

app.post('/api/skills', async (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Skill name is required.',
      })
    }

    const existingSkill = await Skill.findOne({ name })

    if (existingSkill) {
      return res.status(409).json({
        success: false,
        message: 'Skill already exists.',
      })
    }

    const newSkill = new Skill({
      name,
    })

    const savedSkill = await newSkill.save()

    console.log('Skill saved:', savedSkill._id)

    res.status(201).json({
      success: true,
      message: 'Skill created successfully.',
      data: savedSkill,
    })
  } catch (error) {
    console.error('Error creating skill:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create skill.',
    })
  }
})
// ==============================
// Experience API
// ==============================

app.get('/api/experience', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 })

    res.json(experiences)
  } catch (error) {
    console.error('Error fetching experience:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch experience.',
    })
  }
})

app.post('/api/experience', async (req, res) => {
  try {
    const {
      role,
      company,
      duration,
      technologies,
      description,
    } = req.body

    if (
      !role ||
      !company ||
      !duration ||
      !technologies ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: 'All experience fields are required.',
      })
    }

    const newExperience = new Experience({
      role,
      company,
      duration,
      technologies,
      description,
    })

    const savedExperience = await newExperience.save()

    console.log('Experience saved:', savedExperience._id)

    res.status(201).json({
      success: true,
      message: 'Experience created successfully.',
      data: savedExperience,
    })
  } catch (error) {
    console.error('Error creating experience:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create experience.',
    })
  }
})

// ==============================
// Education API
// ==============================

app.get('/api/education', async (req, res) => {
  try {
    const education = await Education.find().sort({ createdAt: -1 })

    res.json(education)
  } catch (error) {
    console.error('Error fetching education:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch education.',
    })
  }
})

app.post('/api/education', async (req, res) => {
  try {
    const {
      degree,
      institution,
      duration,
      description,
    } = req.body

    if (!degree || !institution || !duration || !description) {
      return res.status(400).json({
        success: false,
        message: 'All education fields are required.',
      })
    }

    const newEducation = new Education({
      degree,
      institution,
      duration,
      description,
    })

    const savedEducation = await newEducation.save()

    console.log('Education saved:', savedEducation._id)

    res.status(201).json({
      success: true,
      message: 'Education created successfully.',
      data: savedEducation,
    })
  } catch (error) {
    console.error('Error creating education:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create education.',
    })
  }
})

// About API

app.get('/api/about', async (req, res) => {
  try {
    const about = await About.find().sort({ createdAt: -1 })

    res.json(about)
  } catch (error) {
    console.error('Error fetching about:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch about information.',
    })
  }
})

app.post('/api/about', async (req, res) => {
  try {
    const {
      title,
      description,
      role,
    } = req.body

    if (!title || !description || !role) {
      return res.status(400).json({
        success: false,
        message: 'Title, description and role are required.',
      })
    }

    const newAbout = new About({
      title,
      description,
      role,
    })

    const savedAbout = await newAbout.save()

    console.log('About information saved:', savedAbout._id)

    res.status(201).json({
      success: true,
      message: 'About information created successfully.',
      data: savedAbout,
    })
  } catch (error) {
    console.error('Error creating about information:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create about information.',
    })
  }
})

// ==============================
// Services API
// ==============================

app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 })

    res.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch services.',
    })
  }
})

app.post('/api/services', async (req, res) => {
  try {
    const {
      title,
      description,
      icon,
    } = req.body

    if (!title || !description || !icon) {
      return res.status(400).json({
        success: false,
        message: 'Title, description and icon are required.',
      })
    }

    const newService = new Service({
      title,
      description,
      icon,
    })

    const savedService = await newService.save()

    console.log('Service saved:', savedService._id)

    res.status(201).json({
      success: true,
      message: 'Service created successfully.',
      data: savedService,
    })
  } catch (error) {
    console.error('Error creating service:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to create service.',
    })
  }
})

// Contact Messages API

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      })
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    })

    const savedContact = await newContact.save()

    console.log('Contact message saved:', savedContact._id)

    res.status(201).json({
      success: true,
      message: 'Your message has been saved successfully.',
      data: savedContact,
    })
  } catch (error) {
    console.error('Error saving contact message:', error)

    res.status(500).json({
      success: false,
      message: 'Failed to save your message.',
    })
  }
})

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})