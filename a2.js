/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sachin Singh Bisht              Student ID: 147996235                Date: 28 May, 2024
*
********************************************************************************/ 
// Importing the collegeData Module
const collegeData = require('./modules/collegeData');

// Initialize the collegeData module
collegeData.initialize()

//Getting all students data
  .then(() => {
    return collegeData.getAllStudents();
  })

// Once students are retrieved, log the number of students and proceed to get all courses
  .then(students => {
    console.log(`Successfully retrieved ${students.length} students`);
    return collegeData.getCourses();
  })

// Once courses are retrieved, log the number of courses and proceed to get all TAs 
  .then(courses => {
    console.log(`Successfully retrieved ${courses.length} courses`);
    return collegeData.getTAs();
  })

  .then(tas => {
    console.log(`Successfully retrieved ${tas.length} TAs`);
  })

// Catch and log any errors that occur during the process  
  .catch(err => {
    console.error(err);
  });
