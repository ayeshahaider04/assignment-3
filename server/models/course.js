let mongoose = require("mongoose");

// create a model in the same layout as hat we added to mongodb

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