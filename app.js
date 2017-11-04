var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uploading = require("express-fileupload");

app.use(express.static(__dirname+'/client'));

app.use(uploading());

Classlist = require('./models/classlist');
Student = require('./models/student');
uComment = require('./models/comments');

const port = process.env.PORT || 8080;
// connect to Mongoose

app.use(bodyParser.json());


mongoose.connect('mongodb://root:root@ds127375.mlab.com:27375/crud', {
    useMongoClient:true,
});
var db = mongoose.connection;

// app.use(function (req, res, next) {
    
//         // Website you wish to allow to connect
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    
//         // Request methods you wish to allow
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
//         // Request headers you wish to allow
//         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
//         // Set to true if you need the website to include cookies in the requests sent
//         // to the API (e.g. in case you use sessions)
//         res.setHeader('Access-Control-Allow-Credentials', true);
    
//         // Pass to next layer of middleware
//         next();
//     });

app.get('/', function(req, res){
    res.send('Please use /api/students or /api/classlists');
});

// routing classlists
app.get('/api/classlists', function(req, res){
    Classlist.getClasslists(function(err, classlists){
        if(err){
            throw err;
        }
        res.json(classlists);
    })
});

app.post('/api/classlists', function(req, res){
    var classlist = req.body;
    Classlist.addClasslist(classlist, function(err, classlist){
        if(err){
            throw err;
        }
        res.json(classlist);
    })
});

app.put('/api/classlists/:_id', function(req, res){
    var id = req.params._id;
    var classlist = req.body;
    Classlist.updateClasslist(id, classlist, {}, function(err, classlist){
        if(err){
            throw err;
        }
        res.json(classlist);
    })
});

app.delete('/api/classlists/:_id', function(req, res){
    var id = req.params._id;
    Classlist.removeClasslist(id, function(err, classlist){
        if(err){
            throw err;
        }
        res.json(classlist);
    })
});

// routing the Students

app.get('/api/students', function(req, res){
    Student.getStudents(function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    })
});

app.get('/api/students/:_id', function(req, res){
    var id = req.params._id
    Student.getStudentById(id, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    })
});

app.post('/api/students', function(req, res){
    var student = req.body;
    Student.addStudent(student, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    })
});

app.put('/api/students/:_id', function(req, res){
    var id = req.params._id;
    var student = req.body;
    Student.updateStudent(id, student, {}, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    })
});

app.delete('/api/students/:_id', function(req, res){
    var id = req.params._id;
    Student.removeStudent(id, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    })
});

// Comments handler

app.get('/api/comments', (req, res) => {
	uComment.getComments((err, comments) => {
		if(err){
			throw err;
		}
		res.json(comments);
	});
});

app.post('/api/comments', (req, res) => {
	var comment = req.body;
	uComment.addComment(comment, (err, comment) => {
		if(err){
			throw err;
		}
		res.json(comment);
	});
});


app.listen(port, ()=>{
    console.log('Started server successfully on port :3001');
});
