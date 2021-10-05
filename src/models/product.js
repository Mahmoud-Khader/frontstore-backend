'use strict';

const product = (sequelize, DataTypes) => {
   let product= sequelize.define('product', {
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
    return product
}

module.exports = product;