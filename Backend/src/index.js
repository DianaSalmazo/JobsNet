const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');


//mongoose = orm 

mongoose.connect('mongodb+srv://DianaSalmazo:frnAHKpKtuPbwxdt@cluster0.ixgxz.mongodb.net/ProjetoGama?retryWrites=true&w=majority' , {

});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('rodando na porta 5000');
});

