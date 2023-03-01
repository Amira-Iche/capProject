const db = require("../models");
const Contract = db.contract;
//const Op = db.Sequelize.Op;

// Create and Save a new Contract
exports.create = (req, res) => {
    // Create a Contract
    const contract = {
        DENOMINATION: req.body.DENOMINATION,
        SIGLE: req.body.SIGLE,
        SIEGE_SOCIAL: req.body.SIEGE_SOCIAL ,
        SOCIAL_TYPE: req.body.SOCIAL_TYPE ,
        GREFFE: req.body.GREFFE ,
    };


    // Save Contract in the database
    Contract.create(contract)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Contract."
            });
        });

};

// Retrieve all Contracts from the database.
exports.findAll = (req, res) => {

    Contract.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Contracts."
            });
        });
};

// Find a single Contract with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contract.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Contract with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contract with id=" + id
            });
        });

};