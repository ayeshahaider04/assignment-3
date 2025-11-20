let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Course = require('../models/course');

// get = extract and read smth 
// post = post smth
//put = edit some data 
//delete = delete the data 
// crud = create read update delete 

// read the data from the db
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
        //res.render
    }
})

module.exports = router;
