'use strict';
const sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name:{ 
		type: DataTypes.STRING,
	  	allowNull: false,
	  	validate: {
			notEmpty: true,
	  		isAlpha: true
		}
	},
    last_name: {
		type: DataTypes.STRING,
	  	allowNull: false,
	  	validate: {
			notEmpty: true,
			isAlpha: true
		}
	},
    username: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		validate: {
			notEmpty: true,
			isAlphanumeric: true,
			len:[1,21]
		}
	},
    email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
			isEmail: true
		}
	},
    password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			len: [6,50]
		}
	}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.beforeCreate(function (user) {
	new sequelize.Promise(function (resolve) {
		bcrypt.hash(user.password, null, null, function (err, hashedPassword) {
			resolve(hashedPassword);
		});
	}).then(function(hashedPw) {
		User.password = hashedPw;
	})
  });

  return User;
};
