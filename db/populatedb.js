require('dotenv').config()

const { Client } = require('pg');
const { formatInTimeZone } = require('date-fns-tz');

const populateDate = formatInTimeZone(new Date(), 'US/Central', 'MM/dd/yyyy h:mm:ss a')

const SQL = `

CREATE TABLE IF NOT EXISTS message_board (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message VARCHAR(255),
date VARCHAR(255)
);


INSERT INTO message_board (username, message, date) 
VALUES 
('John Doe', 'Hello, I am John Doe, this is my first message on the message board !', '${populateDate}'),
('Edward', 'Welcome to the message board John Doe, nice to meet you.', '${populateDate}'),
('Jane Doe', 'How do I post a message on here ?', '${populateDate}');
`

async function main() {
    console.log('Seeding...');
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();