module.exports = app => {
    const contract = require("../controllers/contract.controller");

    const router = require("express").Router();

    // Create a new Contract
    router.post("/submit", contract.create);

    // Retrieve all Contracts
    router.get("/all-contracts", contract.findAll);

    // Retrieve a single Contract with id
    router.get("/:id", contract.findOne);



    app.use('/contracts', router);
};