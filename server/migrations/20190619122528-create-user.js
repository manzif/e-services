module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        fullname: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        password: {
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
  down: queryInterface /* , Sequelize */ => queryInterface.dropTable('Users')
};