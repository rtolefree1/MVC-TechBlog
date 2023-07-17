/****************************
 * Note: code from 14 MVC Mini Project with modifications
 * 
 ****************************/
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Old_BlogOLD extends Model {}

Old_BlogOLD.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nameOfBlog: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogComments: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Old_BlogOLD',
  }
);

module.exports = Old_BlogOLD;
