const categorySchema = require('../models/categoryModel.js')

exports.createCategory = async (req, res) => {
    const {name, description, nextSteps, jobs} = req.body;
    const category = categorySchema({name, description, nextSteps, jobs})
    try {
        if(!name || !description || !nextSteps || !jobs) 
            return res.status(400).json({message: 'Please fill in all fields'})
        await category.save()
        res.status(200).json({message: 'Category created successfully', newCategory: category})
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }

}

exports.getAllCategories = async (req, res) => {
    try {
        const catagories = await categorySchema.find().sort({createdAt: -1})
        res.status(200).json(catagories)
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}

exports.getCatagory = async (req, res) => {
    const {id} = req.params;
    try {
        const category = await categorySchema.findById(id)
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({message: 'There is a server error'})
    }
}