const { sequelize } = require('./connection');

async function createTable() {
  try {
    const [result] = await sequelize.query(`
        DROP TABLE IF EXISTS phones;
        DROP TABLE IF EXISTS users;
        CREATE TABLE users (
            id serial PRIMARY KEY,
            firstname VARCHAR(15) NOT NULL,
            lastname VARCHAR(30),
            birthdate DATE
         );

         CREATE TABLE phones (
            id serial PRIMARY KEY,
            value VARCHAR(15) NOT NULL,
            comment TEXT,
            "userId" INTEGER REFERENCES users(id) ON DELETE CASCADE
         );
        `);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function seedTable() {
  try {
    const [result] = await sequelize.query(`
        INSERT INTO users (firstname, lastname, birthdate) VALUES
        ('John', 'Doe', '1990-01-01'),
        ('Alex', 'Bobovski', '2023-12-12'),
        ('Elon', 'Musk', '1980-01-01');

        INSERT INTO phones (value, comment, "userId") VALUES 
        ('+0000000000', 'Main', 1),
        ('+79167548782', 'Mobile', 1),
        ('6765997', 'Городской', 2),
        ('123456789', 'Mobile (urgent)', 2),
        ('911', 'DONT CALL', 3),
        ('123', 'random', 2);
        `);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function selectData() {
  try {
    const [result, metadata] = await sequelize.query(`
    SELECT phones.id AS id, 
    users.id AS "ownerId", 
    phones.value, 
    users.firstname AS "owner.firstname", 
    users.lastname AS "owner.lastname"
    FROM phones JOIN users ON phones."userId" = users.id;
          `);
    console.log(result.filter((phones) => phones['owner.lastname'].length <= 4)); // .filter((user) => user.firstname.includes('e')));
  } catch (error) {
    console.log(error);
  }
}

// createTable().then(seedTable).then(selectData);
selectData();
