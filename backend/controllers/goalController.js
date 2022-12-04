const asyncHandler = require("express-async-handler")
const Goal = require('../models/goalModel')
const getGoals = asyncHandler(async(req, res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoal =  asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("add text filed")
    }
    const goal = await Goal.create({
        text : req.body.text
    })
    res.json(goal)
})

const updateGoal =  asyncHandler(async(req, res)=>{
    res.json({
        message: `updated goals ${req.params.id}`
    })
})

const deleteGoal = asyncHandler(async(req, res)=>{
    res.json({
        message: `deleted goals ${req.params.id}`
    })
})


module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
