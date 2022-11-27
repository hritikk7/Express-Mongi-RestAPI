const express = require('express')
const router = express.Router()

const {getGoal, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

// router.get('/', getGoals())
router.get('/', getGoal)

router.post('/', setGoal)
// router.put('/:id', (req, res)=>{
//     res.json({
//         "message" : `updated goal ${req.params.id}`
//     })
// })
router.put('/:id', updateGoal)


// router.delete('/:id',(req, res)=>{
//     res.json({
//         "message" : `deleted id ${req.params.id}`
//     })
// })

router.delete('/:id', deleteGoal)

module.exports = router