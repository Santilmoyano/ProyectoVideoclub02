const express = require('express');
const {connection} = require('./config/DB.js');
const movies = require('./controllers/movies.js');
const morgan = require('morgan');
const router = require('./routes/movies.js');
const cors = require ("cors")

const app = express();
const port = 5000;



app.use(cors({
    origin: 'http://localhost:5173',methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());
app.use("/api", router)

//Midlewares
app.use(morgan('dev'))

app.get("/", (req,res)=>{
    console.log('Bienvenido a mi App')
})




app.listen(port, ()=>{
    console.log(`Server opening: http://localhost:${port}`)
})
