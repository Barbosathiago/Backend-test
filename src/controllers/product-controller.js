'use strict';

const repository = require('../repository/product-repository');

exports.get = (req, res, next) => {
    repository
    .get()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    repository
        .post(req.body)
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto',
                data: e
            });
        });
};
