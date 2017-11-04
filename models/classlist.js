var mongoose = require('mongoose');

// Classlist Schema

var classlistSchema = mongoose.Schema({
    class_name:{
        type: String,
        required: true
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

var Classlist = module.exports = mongoose.model('Classlist', classlistSchema);

// Get Classlists
module.exports.getClasslists = function(callback, limit){
    Classlist.find(callback).limit(limit);
};

// Add to Classlist
module.exports.addClasslist = function(classlist, callback){
    Classlist.create(classlist, callback);
};

// Update Classlist
module.exports.updateClasslist = function(id, classlist, options, callback){
    var query = {_id: id};
    var update = {
        name: classlist.name
    }
    Classlist.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeClasslist = function(id, callback){
    var query = {_id: id};
    Classlist.remove(query, callback);
};
