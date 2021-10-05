'use strict';

const express = require('express');
const app = express();
const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');
const logger=require('./middleware/logger');
// const validator=require('./middleware/validator');
const productRouter=require('./routes/product');
const cartRouter=require('./routes/cart');
const cors=require('cors')

app.use(cors())
app.use(express.json());
app.use(logger);
app.use(productRouter);
app.use(cartRouter);

app.get('/' , (req,res)=>{
 
    res.status(200).send('Hello Mahmoud');
});




app.get('/bad' , (req,res,next)=>{
    next('error from bad end point');
});



app.use('*',notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port,()=> console.log(`Server started on port ${port}`))
    
}

module.exports = {
    start,
    app
}