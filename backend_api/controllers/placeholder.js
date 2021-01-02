const express = require('express');
const placeholder = express.Router();
const Place = require('../models/placemodels');


// INDEX
placeholder.get('/', async (req, res) => {
    try{
        const foundPlaceholder = await Place.find({});
        res.status(200).json(foundPlaceholder);
    }catch(error){
        res.status(400).json(error)
    }
});

// CREATE
placeholder.post('/', async (req, res) => {
    try {
        const createdPlaceholder = await Place.create(req.body)
        res.status(200).json(createdPlaceholder)
    } catch (error) {
        res.status(400).json(error)
    }
});

// DELETE
placeholder.delete('/:id', async (req, res) => {
    try {
        const deletedPlaceholder = await Place.
        findByIdAndRemove(req.params.id);
        res.status(200).json(deletedPlaceholder);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
});

// UPDATE 
placeholder.put('/:id', async (req, res) => {
    try {
        const updatedPlaceholder = await Place.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedPlaceholder);
    } catch (error) {
        res.status(400).json(error);
    }
});

// SHOW
placeholder.get('/:id', async (req, res) => {
    try {
        const deletedPlaceholder = await Place.
        findById(req.params.id, req.body);
        res.status(200).json(deletedPlaceholder);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})

module.exports = placeholder;