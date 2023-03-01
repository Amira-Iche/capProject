
module.exports = (sequelize, Sequelize) => {
    const Contract = sequelize.define("contract", {
        DENOMINATION: {
            type: Sequelize.STRING
        },
        SIGLE: {
            type: Sequelize.STRING
        },
        SIEGE_SOCIAL: {
            type: Sequelize.STRING
        },
        SOCIAL_TYPE: {
            type: Sequelize.INTEGER
        },
        GREFFE: {
            type: Sequelize.STRING
        }
    });

    return Contract;
};