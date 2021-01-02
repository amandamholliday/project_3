const { Schema, model } = require('mongoose');

const placeholderSchema = Schema({
    title: {type: String, required: true},
    url: {type: String, default: true}
})

module.exports = model('Place', placeholderSchema);