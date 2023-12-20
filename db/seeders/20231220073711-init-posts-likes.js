/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tweets',
      [
        { body: 'Hello everyone!', userId: 1 },
        { body: 'Hello world!', userId: 2 },
        { body: 'Whasssup buddies?? How ya doin', userId: 3 },
        { body: 'I am a tweet', userId: 4 },
        { body: 'Thanks, ELon Musk', userId: 5 },
        { body: 'I am a tweet 2', userId: 2 },
        { body: 'I am a rock', userId: 2 },
        { body: 'Moscow never sleeps', userId: 3 },
        { body: 'I am a tweet 3', userId: 4 },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Likes',
      [
        { userId: 2, tweetId: 6 },
        { userId: 2, tweetId: 7 },
        { userId: 3, tweetId: 8 },
        { userId: 4, tweetId: 9 },
        { userId: 2, tweetId: 3 },
        { userId: 2, tweetId: 4 },
        { userId: 2, tweetId: 5 },
        { userId: 3, tweetId: 4 },
        { userId: 4, tweetId: 3 },
        { userId: 1, tweetId: 2 },
        { userId: 1, tweetId: 3 },
        { userId: 1, tweetId: 4 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
