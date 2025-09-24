const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (err){
        res.status(400).send(err);
    }
}

exports.getAllTasks = async (req, res) => {
    try{
        const task = await Task.find({});
        res.status(200).send(task);
    }catch(err){
        res.status(500).send(err);
    }
}