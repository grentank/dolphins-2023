'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'companyId' })
    }
  }
  Company.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};