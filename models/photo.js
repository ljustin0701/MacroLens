'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    photo_id: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    is_food: DataTypes.BOOLEAN,
    is_flagged: DataTypes.BOOLEAN,
    caption: DataTypes.TEXT,
    calories: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    proteins: DataTypes.INTEGER,
    fats: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Photo;
};
