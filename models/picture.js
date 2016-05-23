var mongoose = require("mongoose");

var pictureSchema = new mongoose.Schema({
    imageLink: String,
    name: String,
    description: String,
    author: {
        id: { type: mongoose.Schema.Types.ObjectId, ref:"User" }, 
        username: String
    },
    comments: [ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Pictures", pictureSchema);