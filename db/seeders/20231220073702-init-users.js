/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        { name: 'Alex', nickname: 'famousTurtle', email: 'alex@mail.com' },
        { name: 'Bob', nickname: 'bobby', email: 'bobby@gmail.com' },
        { name: 'Carl', nickname: 'carl', email: 'inthesky@mail.en' },
        {
          name: 'Sara Williams',
          email: 'sara@example.com',
          nickname: 'random',
        },
        {
          name: 'Chris Jackson',
          email: 'chris@example.com',
          nickname: 'random2',
        },
        {
          name: 'Mary Thomas',
          email: 'mary@example.com',
          nickname: 'random3',
        },
        {
          name: 'Patricia Harris',
          email: 'patricia@example.com',
          nickname: 'random4',
        },
        {
          name: 'Elizabeth Brown',
          email: 'elizabeth@example.com',
          nickname: 'random5',
        },
        {
          name: 'James Martin',
          email: 'james@example.com',
          nickname: 'random7',
        },
        {
          name: 'Robert Miller',
          email: 'robert@example.com',
          nickname: 'random123232',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
