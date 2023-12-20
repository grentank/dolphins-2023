'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Tweet }) {
      this.belongsTo(User, { foreignKey: 'userId' })
      this.belongsTo(Tweet, { foreignKey: 'tweetId' })
    }
  }
  Like.init({
    userId: DataTypes.INTEGER,
    tweetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};