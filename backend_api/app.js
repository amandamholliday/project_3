require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const placeholderController = require('./controllers/placeholder')
const MONGOURI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
})
mongoose.connection.on('disconnected', () => {
    console.log('Hey You disconnected from Mongo')
})
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo ')
})

app.use('/api/placeholder', placeholderController);

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊');
});

module.exports = app;