const { Schema, model } = require('mongoose');

const placeholderSchema = Schema({
    subject: {type: String, required: true},
    note: {type: String, default: true}
})

module.exports = model('Place', placeholderSchema);