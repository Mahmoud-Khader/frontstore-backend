'use strict';

const express = require('express');
const router = express.Router();
const {product} = require('../models/index');

router.get('/product', getAllProduct);
router.get('/product/:id', getOneProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

//Get All Data Function 
async function getAllProduct(req, res) {
    let all = await product.getAll();
    res.status(200).json(all);
}

// Get One  Function
async function getOneProduct(req, res) {
    const id = parseInt(req.params.id);
    let oneproduct = await product.getOne(id);
    res.status(200).json(oneproduct);

}

// create  Function

async function createProduct(req, res) {
    let newItem = req.body;
    let newproduct = await product.create(newItem);
    res.status(201).json(newproduct);

}

// Update  Fucntion

async function updateProduct(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;

    
    let updateproduct = await product.update(id,obj);
    res.status(200).json(updateproduct);

}

//Delete Function

async function deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    let deleteproduct = await product.delete(id);
    res.status(204).json(deleteproduct);
}

module.exports = router;