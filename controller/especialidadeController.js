const express = require('express');

const especialidadeModel = require('../model/especialidadeModel');

const router = express.Router();

router.post('/especialidade/inserir', (req,res)=>{

    let nome_especialidade = req.body.nome_especialidade;
    
    especialidadeModel.create(
        {nome_especialidade}
    ).then(
        ()=>{
            return res.status(201).json({
            errorStatus:false,
            mensageStatus:`A especialidade ${nome_especialidade} foi adicionada com sucesso!`
            });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: `Não foi possivel adicionar a especialidade ${nome_especialidade} ` + error
            });
        }
    );
});

router.get('/especialidade/selecionar', (req,res)=>{
    especialidadeModel.findAll()
        .then(
            (especialidades)=>{
                res.json(especialidades);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.get('/especialidade/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    especialidadeModel.findByPk(id)
        .then(
            (especialidade)=>{
                res.json(especialidade);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.get('/especialidade/selecionar/:titulo', (req,res)=>{
    let {nome_especialidade} = req.params;
    especialidadeModel.findOne({where:{nome_especialidade:nome_especialidade}})
        .then(
            (especialidade)=>{
                res.json(especialidade);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.put('/especialidade/alterar', (req,res)=>{

    let id = req.body.id;
    let nome_especialidade = req.body.nome_especialidade;

    especialidadeModel.update(
        {nome_especialidade},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`Especialidade ${nome_especialidade} foi alterada com sucesso!`
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: `Não foi possivel modificar a especialidade ${nome_especialidade} ` + error
            });
        }
    );

});

router.delete('/especialidade/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    especialidadeModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'Especialidade foi excluida com sucesso'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;