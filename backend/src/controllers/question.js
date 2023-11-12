const questionSchema = require("../models/questionModel.js");

exports.createQuestion = async (req, res) => {
    const {text} = req.body;
    const question = questionSchema({text})
    try {
        if(!text) 
            return res.status(400).json({message: 'Please fill in all fields'})
        await question.save()
        res.status(200).json({message: 'Question created successfully', newQuestion: question})
    }
    catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await questionSchema.find().sort({createdAt: -1})
        res.status(200).json(questions)
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}

exports.getQuestion = async (req, res) => {
    const {id} = req.params;
    try {
        const question = await questionSchema.findById(id)
        res.status(200).json(question)
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}