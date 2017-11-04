var mongoose = require('mongoose');

// Classlist Schema

var commentsSchema = mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

var uComment = module.exports = mongoose.model('Comment', commentsSchema);

// Get Comments
module.exports.getComments = function(callback, limit){
    uComment.find(callback).limit(limit);
};

// Add to Comment
module.exports.addComment = function(comment, callback){
    uComment.create(comment, callback);
};