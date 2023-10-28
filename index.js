const express = require('express');
const mongoose = require('mongoose');
//LINKS TO THE ROOTS FILE IN THE ROUTES FOLDER
//THIS IS WHERE IM GOING TO DO ALL OF THE ENDPOINTS
//HERE I WILL BE ONLY SETTING UP THE SERVER
const routes = ('/routes/routes');
app.use('/api',routes);

const app = express();
app.use(express.json());

require.env.config();


//CONNECTING THE MONGODB DATABASE
const mongostring = process.env;// need TO ADD A URL TO MY MONGODDB DATABASE
mongoose.connect(mongostring);
const database = mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('Database has been connected')
})




app.listen(3000, () => {
    console.log('the server is currently running at ${3000}')
})