const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate({ User, Like }) {
      this.belongsTo(User, { foreignKey: 'userId', as: 'author' });
      this.hasMany(Like, { foreignKey: 'tweetId' });
      this.belongsToMany(User, { through: Like, foreignKey: 'tweetId', as: 'likedByUsers' });
    }
  }
  Tweet.init(
    {
      body: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Tweet',
    },
  );
  return Tweet;
};
