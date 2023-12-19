const { User, Phone, Company } = require('./db/models');

// User.findAll()
//   .then((data) => data.map((user) => user.get()))
//   .then(console.log)
//   .catch(console.log);

async function seedData() {
  //   const user = await User.create({
  //     firstName: 'Elon',
  //     lastName: 'Musk',
  //     birthdate: new Date('1971-06-28'),
  //   });
  await Company.bulkCreate([{ name: 'Elbrus Bootcamp' }, { name: 'X former Twitter' }]);
  await User.bulkCreate([
    { firstName: 'Steve', lastName: 'Jobs', birthdate: new Date('1955-10-28'), companyId: 1 },
    { firstName: 'Bill', lastName: 'Gates', birthdate: new Date('1955-10-28'), companyId: 1 },
    { firstName: 'Elon', lastName: 'Musk', birthdate: new Date('1971-06-28'), companyId: 2 },
  ]);

  await Phone.bulkCreate([
    { value: '000000000000', type: 'Mobile', userId: 1 },
    { value: '111111111111', type: 'Home', userId: 1 },
    { value: '222222222222', type: 'Work', userId: 1 },
    { value: '333333333333', type: 'Mobile', userId: 2 },
    { value: '444444444444', type: 'Home', userId: 2 },
    { value: '555555555555', type: 'Work', userId: 2 },
    { value: '1-888-518-3752', type: 'Customer Service', userId: 3 },
    { value: '+1 310-363-6000', type: 'Spacex?', userId: 3 },
    { value: 'xxx', type: 'Twitter?', userId: 3 },
  ]);

  //   await Phone.create({ userId: 2 });
  //   const phones = await Phone.findAll({
  //     where: { type: 'Mobile' },
  //   });
  //   console.log(phones.map((el) => el.get()));
  //   console.log(
  //     'res:',
  //     `${user.firstName} ${user.lastName} was born in ${user.birthdate.toLocaleDateString('ru-RU')}`,
  //   );
  //   const allUsers = await User.findAll();
  //   console.log(
  //     'Find all users:',
  //     allUsers.map((el) => el.get()),
  //   );
}

// seedData();

async function getData() {
  //   const phone = await Phone.findOne({
  //     where: {
  //       value: '1-888-518-3752',
  //     },
  //     include: {
  //       model: User,
  //       include: Company,
  //     },
  //   });
  //   console.log(
  //     `Phone ${phone.value} belongs
  //     to ${phone.User.firstName} who works
  //     in company ${phone.User.Company.name}`,
  //   );
  //   console.log(JSON.parse(JSON.stringify(phone)));
  //   const elonMusk = await User.findOne({
  //     where: {
  //       firstName: 'Elon',
  //       lastName: 'Musk',
  //     },
  //     include: Phone,
  //   });
  //   console.log(JSON.parse(JSON.stringify(elonMusk)));

  //   await Company.destroy({ where: { id: 1 } });
  //   const users = await User.findAll();
  //   console.log(JSON.parse(JSON.stringify(users)));
  await User.destroy({ where: { companyId: null } });
  const phones = await Phone.findAll();
  console.log(JSON.parse(JSON.stringify(phones)));
}

getData();
