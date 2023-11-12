const jobSchema = require('../models/jobModel.js')

exports.createJob = async (req, res) => {
    const {title, description, link} = req.body;
    const job = jobSchema({title, description, link})
    try {
        if(!title || !description || !link) 
            return res.status(400).json({message: 'Please fill in all fields'})
        await job.save()
        res.status(200).json({message: 'Job created successfully', newJob: job})
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await jobSchema.find().sort({createdAt: -1})
        res.status(200).json(jobs)
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}

exports.getJob= async (req, res) => {
    const {id} = req.params;
    try {
        const job = await jobSchema.findById(id)
        res.status(200).json(job)
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}