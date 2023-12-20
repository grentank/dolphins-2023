const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tweet, Like }) {
      this.hasMany(Tweet, { foreignKey: 'userId', as: 'tweets' });
      this.hasMany(Like, { foreignKey: 'userId' });
      this.belongsToMany(Tweet, { through: Like, foreignKey: 'userId', as: 'likedTweets' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
