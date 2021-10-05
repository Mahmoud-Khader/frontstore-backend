'use strict';

const express = require('express');
const {cart} = require('../models/index');
const router=express.Router();

router.get('/cart',getAllCart);
router.get('/cart/:id',getOneCart);
router.post('/cart',createCart);
router.put('/cart/:id',updateCart);
router.delete('/cart/:id',deleteCart);

//Get All Data Function 
async function getAllCart(req,res) {
    let allcart=await cart.getAll();
    res.status(200).json(allcart);
    
}

// Get One  Function
async function getOneCart(req,res) {
    const id =parseInt(req.params.id);
    let oneCart=await cart.getOne(id);
    res.status(200).json(oneCart);
    
}

// create  Function

async function createCart(req,res) {
    let newItem=req.body;
    let newcart = await cart.create(newItem);
    res.status(200).json(newcart);
    
}

// Update  Fucntion

async function updateCart(req,res) {
    let id=parseInt(req.params.id);
    let obj = req.body;

    
    let updatecart=await cart.update(id,obj);
    res.status(200).json(updatecart);
    
}

//Delete Function

async function deleteCart(req, res) {
    const id = parseInt(req.params.id);
    let deletecart = await cart.delete(id);
    res.status(204).json(deletecart);
}

module.exports = router;