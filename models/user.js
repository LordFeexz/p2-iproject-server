'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status:{
      type:DataTypes.STRING,
      defaultValue:`Standard`
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(el => el.password = hash(el.password))
  return User;
};