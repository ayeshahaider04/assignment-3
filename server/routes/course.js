let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Course = require('../models/course');

// get = extract and read smth 
// post = post smth
//put = edit some data 
//delete = delete the data 
// crud = create read update delete 

//get route for the  read course list - read operation
router.get('/',async(req,res,next)=>{
    try
    {
        const CourseList = await Course.find();
        console.log(CourseList);
        res.render('Courses/list',{
            title:'Courses',
            CourseList:CourseList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Courses/list',{
            error:'error on server'
        })
    }
})
//get route for displaying the add page - create operation
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Courses/add',{
            title:'Add a Course'
        })
    }
        catch(err)
    {
        console.error(err);
        res.render('Courses/add',{
            error:'error on server'
        })
    }
})
//post route for processing the add page - create operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let newCourse = Course({
            "className":req.body.className,
            "taskDescription":req.body.taskDescription,
            "taskType":req.body.taskType,
            "dueDate":req.body.dueDate,
            "levelOfCompletion":req.body.levelOfCompletion,
            "notes":req.body.notes
        });
        Course.create(newCourse).then(()=>{
            res.redirect('/courses')
        })
    }
        catch(err)
    {
        console.error(err);
        res.render('Courses/add',{
            error:'error on server'
        })
    }
})
//get route for displaying the edit page - update operation
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const courseToEdit = await Course.findById(id);
        res.render("Courses/edit",
            {
                title: 'Edit Course',
                Course: courseToEdit
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})
//post route for displaying the edit page - update operation
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updateCourse = Course({
            "_id":id,
            "className":req.body.className,
            "taskDescription":req.body.taskDescription,
            "taskType":req.body.taskType,
            "dueDate":req.body.dueDate,
            "levelOfCompletion":req.body.levelOfCompletion,
            "notes":req.body.notes
        })
        Course.findByIdAndUpdate(id,updateCourse).then(()=>{
            res.redirect("/courses")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})
//get route for performing delete - delete operation
router.get('/delete/:id',async(req,res,next)=>{
    
})
module.exports = router;
