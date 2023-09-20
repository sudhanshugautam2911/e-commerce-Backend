const express = require('express')
const server = express();
const mongoose = require('mongoose');
const productRouters = require('./routes/Product');
const brandRouters = require('./routes/Brand')
const categoryRouters = require('./routes/Category')

// middleware to parse json req.body
server.use(express.json());
server.use("/products", productRouters.router);
server.use("/brands", brandRouters.router);
server.use("/categories", categoryRouters.router);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('Database connected')
}


// default Port
server.get('/', (req, res)=> {
    res.send(`<h1> This is Homepage</h1>`)
})


//activate
server.listen(8080, ()=> {
    console.log("Server started")
} )


