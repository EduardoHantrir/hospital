const express = require ('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const medicoController = require('./controller/medicoController');
app.use('/', medicoController);

const especialidadeController = require('./controller/especialidadeController');
app.use('/', especialidadeController);

app.listen(3000, ()=>{ 
    console.log('Servidor operando - http://localhost:3000'); 
});