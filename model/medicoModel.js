const sequelize = require ('sequelize');

const connection = require ('../database/database');

const especialidade = require('./especialidadeModel');

const medico = connection.define(
    'tbl_medico',
    {
        nome_medico:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        email_medico:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        telefone_medico:{
            type: sequelize.STRING(10),
            allowNull:false
        },
        celular_medico:{
            type: sequelize.STRING(11),
            allowNull:false
        },
        foto_medico:{
            type:sequelize.STRING(500),
            allowNull:false
        }
    }
);

especialidade.hasMany(medico);

medico.belongsTo(especialidade);

//medico.sync({force:false});

module.exports = medico;