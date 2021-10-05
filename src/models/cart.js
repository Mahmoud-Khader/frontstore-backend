'use strict';

// const sequelize = require("sequelize");

const cart = (sequelize, DataTypes) => {
    let cart = sequelize.define('cart', {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            // allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            // allowNull:false
        },
        price: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
        inventoryCount: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
        image: {
            type: DataTypes.STRING,
            // allowNull:false
        }
    });
    return cart
}

module.exports = cart;