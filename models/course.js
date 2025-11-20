let mongoose = require("mongoose");

// create a model

let courseModel = mongoose.Schema(
    {
    className: String,
    taskDescription: String,
    taskType: String,
    dueDate: String,
    levelOfCompletion: String,
    notes: String
    },
    {
        collection:"courses"
    }

);
module.exports=mongoose.model('Course', courseModel);