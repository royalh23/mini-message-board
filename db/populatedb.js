const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  created_date VARCHAR ( 255 )
);

INSERT INTO messages (username, message, created_date) 
VALUES
  ('Amando', 'Hey world :)', 'Fri Aug 02 2024 22:55:06 GMT+0000 (Coordinated Universal Time)'),
  ('Charles', 'I am Charles...', 'Fri Aug 02 2024 22:55:06 GMT+0000 (Coordinated Universal Time)'),
  ('corlando', 'congrats brother', 'Sat Aug 03 2024 15:25:56 GMT+0000 (Coordinated Universal Time)'),
  ('mow', 'ssup', 'Sat Aug 03 2024 16:12:04 GMT+0000 (Coordinated Universal Time)'),
  ('ben', 'helloooooo', 'Sat Aug 03 2024 17:12:14 GMT+0000 (Coordinated Universal Time)'),
  (':-(', ':-)', 'Sat Aug 03 2024 18:28:02 GMT+0000 (Coordinated Universal Time)'),
  ('testmessage', 'testinggggg', 'Sat Aug 03 2024 18:39:00 GMT+0000 (Coordinated Universal Time)'),
  ('Buenas', 'Noches', 'Sat Aug 03 2024 22:22:40 GMT+0000 (Coordinated Universal Time)'),
  ('samir', 'Hello world', 'Sun Aug 04 2024 02:06:04 GMT+0000 (Coordinated Universal Time)');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.argv[process.argv.length - 1],
  });
  await client.connect();
  console.log('connected to the database');
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
