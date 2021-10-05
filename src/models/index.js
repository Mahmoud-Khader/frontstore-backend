'use strict';
require('dotenv').config();
const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://kafnrhbs:brubHwYYyD5nlpgC9fttpfaTkPr4aw9M@hattie.db.elephantsql.com/kafnrhbs";
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./collection-class');

const productSchema=require('./product');
const cartSchema=require('./cart');

let sequelize = new Sequelize(POSTGRES_URI,{});

const productModel = productSchema(sequelize,DataTypes);
const cartModel = cartSchema(sequelize,DataTypes);

productModel.hasMany(cartModel,{foreignKey:'productId',sourceKey :'id'});
cartModel.belongsTo(productModel,{foreignKey:'productId',targetKey :'id'});

// exports 
const productCollection=new Collection(productModel);
const cartCollection= new Collection(cartModel);

module.exports={
    product:productCollection,
    cart:cartCollection,
    db:sequelize
}