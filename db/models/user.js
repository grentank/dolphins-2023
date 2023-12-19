const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Phone, Company }) {
      this.hasMany(Phone, { foreignKey: 'userId' });
      this.belongsTo(Company, { foreignKey: 'companyId' });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
