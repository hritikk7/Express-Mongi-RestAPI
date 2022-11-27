const getGoal = (req, res)=>{
    
    res.status(200).json({
        message: "getting goals"
    })
}

const setGoal = (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("add text filed")
    }
    res.json({
        message: "goal set"
    })
}

const updateGoal = (req, res)=>{
    res.json({
        message: `updated goals ${req.params.id}`
    })
}

const deleteGoal = (req, res)=>{
    res.json({
        message: `deleted goals ${req.params.id}`
    })
}


module.exports={
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}
