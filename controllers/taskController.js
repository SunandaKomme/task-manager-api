const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
    try{
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
    }catch(error) {
        res.status(500).json({msg: "Error fetching tasks" });
    }
};

exports.createTask = async (req, res) => {
    try{
  const task = await Task.create({
    user: req.user,
    title: req.body.title
  });
  res.json(task);
}catch(error) {
    res.status(500).json({msg: "Error creating task"});
}
};

exports.updateTask = async (req, res) => {
    try{
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
}catch(error) {
    res.status(500).json({msg:"Error updating task"});
}
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Task deleted" });
};