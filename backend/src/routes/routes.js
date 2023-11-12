const router = require('express').Router();
const {createQuestion, getAllQuestions, getQuestion} = require('../controllers/question.js')
const {createCategory, getAllCategories, getCategory} = require('../controllers/category.js')
const {createJob, getAllJobs, getJob} = require('../controllers/job.js')

router.post('/questions', createQuestion)
    .get('/questions', getAllQuestions)
    .get('/questions/:id', getQuestion)
    .post('/categories', createCategory)
    .get('/categories', getAllCategories)
    .get('/categories/:id', getCategory)
    .post('/jobs', createJob)
    .get('/jobs', getAllJobs)
    .get('/jobs/:id', getJob)

module.exports = router;