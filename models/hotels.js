var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var { DB_COLLECTION } = process.env;
var Hotels = new Schema({
    id: {type: String, required: true, max: 100},
    name: {type: String, required: true},
    stars: {type: Number, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    amenities: [{type: String, required: true}],
    created_at: { type: Date, default: Date.now }
});

Hotels.index({ name: 'text', stars: 'number' });
module.exports = mongoose.model(DB_COLLECTION, Hotels, DB_COLLECTION);