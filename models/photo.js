'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    image: {
		type: DataTypes.BLOB,
	  	allowNull: false
	},
	username: {
		type: DataTypes.STRING,
	  	allowNull: false,
	  	validate: {
			notEmpty: true,
	  		isAlphanumeric: true,
	  		len:[1,21]
		}
	},
//    is_food: DataTypes.BOOLEAN,
//    is_flagged: DataTypes.BOOLEAN,
    caption: {
		type: DataTypes.TEXT,
		allowNull: false
	},
//    calories: DataTypes.INTEGER,
//    carbs: DataTypes.INTEGER,
//    proteins: DataTypes.INTEGER,
//    fats: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Photo;
};
