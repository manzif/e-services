'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusDescription: {
        type: Sequelize.STRING
      },
      spTransactionId: {
        type: Sequelize.STRING
      },
      walletTransactionId: {
        type: Sequelize.STRING
      },
      chargedCommission: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      paidAmount: {
        type: Sequelize.INTEGER
      },
      transactionId: {
        type: Sequelize.STRING
      },
      statusCode: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pays');
  }
};