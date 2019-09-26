'use strict';

module.exports = function (sequelize, DataTypes) {
  var Pay = sequelize.define('Pay', {
    statusDescription: DataTypes.STRING,
    spTransactionId: DataTypes.STRING,
    walletTransactionId: DataTypes.STRING,
    chargedCommission: DataTypes.STRING,
    currency: DataTypes.STRING,
    paidAmount: DataTypes.INTEGER,
    transactionId: DataTypes.STRING,
    statusCode: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  Pay.associate = function (models) {// associations can be defined here
  };

  return Pay;
};