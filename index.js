const { User, Tweet, Like } = require('./db/models');

async function main() {
  //   const userId = 1;
  //   const targetUser = await User.findOne({
  //     where: { id: userId },
  //     include: ['tweets', 'likedTweets'],
  //   });
  //   console.dir(targetUser.toJSON(), { depth: null });
  //   const tweetId = 4;
  //   const targetTweet = await Tweet.findOne({
  //     where: { id: tweetId },
  //     include: ['author', 'likedByUsers'],
  //   });
  //   console.dir(targetTweet.toJSON(), { depth: null });
  const userId = 1;
  const targetUser = await User.findOne({
    where: { id: userId },
    include: ['tweets', 'likedTweets', Like],
  });
  console.dir(targetUser.toJSON(), { depth: null });
}

main();

// require('dotenv').config();

// console.log(process.env);
