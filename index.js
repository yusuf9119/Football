const express = require('express');
const mongoose = require('mongoose');

const routes = ('/routes/routes');
app.use('/api',routes);

const app = express();
app.use(express.json());

require.env.config();


//CONNECTING THE MONGODB DATABASE
const password = process.env.R2yhCGFL5AA3kk4Y
const mongostring = `mongodb+srv://yusufa9339:<password>@cluster0.9qrcdb6.mongodb.net/`;
mongoose.connect(mongostring,password);
const database = mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('Database has been connected')
})



//Port
app.listen(3000, () => {
    console.log('the server is currently running at ${3000}')
})