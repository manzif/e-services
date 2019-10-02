'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Users', [{
    fullname: 'Manirakora Alexia',
    email: 'maniralexie@gmail.com',
    password: 'password',
    createdAt : new Date(),
    updatedAt : new Date(),
  }], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
