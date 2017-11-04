var mongoose = require('mongoose');

// Genre Schema

var studentSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    image_url:{
        type: String
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

var Student = module.exports = mongoose.model('Student', studentSchema);

// Get Students
module.exports.getStudents = function(callback, limit){
    Student.find(callback).limit(limit);
};

module.exports.getStudentById = function(id, callback){
    Student.findById(id, callback);
};

// Add Genre
module.exports.addStudent = function(student, callback){
    Student.create(student, callback);
};

module.exports.updateStudent = function(id, student, options, callback){
    var query = {_id: id};
    var update = {
        firstName: student.firstName,
        lastName: student.lastName,
        class: student.class,
        age: student.age,
        phone:student.phone,
        image_url: student.image_url
    }
    Student.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeStudent = function(id, callback){
    var query = {_id: id};
    Student.remove(query, callback);
};