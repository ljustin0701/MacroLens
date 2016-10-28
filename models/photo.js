'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    photo_id: DataTypes.INTEGER,
    image: DataTypes.BYTEA,
    is_food: DataTypes.BOOLEAN,
    is_flagged: DataTypes.BOOLEAN,
    caption: DataTypes.TEXT,
    calories: DataTypes.INT,
    carbs: DataTypes.INT,
    proteins: DataTypes.INT,
    fats: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Photo;
};