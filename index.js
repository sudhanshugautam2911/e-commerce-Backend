const express = require('express')
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
// cors help to call from one port to another


const productRouters = require('./routes/Product');
const brandRouters = require('./routes/Brand')
const categoryRouters = require('./routes/Category')
const usersRouters = require('./routes/Users')
const authRouters = require('./routes/Auth')


// middleware to parse json req.body
server.use(cors({
    exposedHeaders: ['X-Total-Count'] 
}))
server.use(express.json());
server.use("/products", productRouters.router);
server.use("/brands", brandRouters.router);
server.use("/categories", categoryRouters.router);
server.use("/users", usersRouters.router);
server.use("/auth", authRouters.router);

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


