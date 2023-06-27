const express = require('express');
const medicoModel = require('../model/medicoModel.js');
const upload = require('../helper/upload.js');

const router = express.Router();

router.post('/medico/inserir', upload.array('fotoMedico', 1), (req,res)=>{

    let {nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId} = req.body;
    let foto_medico = req.fotoMedico[0].path;
    

    medicoModel.create(
        {
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            foto_medico,
            tblEspecialidadeId
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'Medico cadastrado com sucesso no sistema!'
            })
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: 'Não foi possivel cadastrar o medico ' + error
            })
        }
    )
});

module.exports = router;