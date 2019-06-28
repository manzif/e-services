export default (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your book'
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an author'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: 'Pease input a description'
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a description'
      }
    },
  }, {});
  Service.associate = (models) => {
    // associations can be defined here
  };
  return Service;
};