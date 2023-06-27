const sequelize = require('sequelize');

const connection = require('../database/database');

const especialidade = connection.define(
    'tbl_especialidade',
    {
        nome_especialidade:{
            type: sequelize.STRING(100),
            allowNull:false
        }
    }
);

//especialidade.sync({force:false});

module.exports = especialidade;