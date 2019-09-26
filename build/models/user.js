"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter All your names'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      }
    }
  }, {});

  User.associate = function (models) {// associations can be defined here
  };

  return User;
};

exports["default"] = _default;