var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    content : { type: String, required: true },
    regdate: { type: Date, default: Date.now  },
    modidate: { type: Date, default: Date.now  },
    passwd : { type: String, required: true },
    hit : { type: Number, required: true },
});

module.exports = mongoose.model('board', boardSchema);