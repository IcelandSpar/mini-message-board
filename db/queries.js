const pool = require('./pool');

async function getMessageBoard() {
    const { rows } = await pool.query('SELECT * FROM message_board');
    return rows;
}

async function insertPost(newData) {
    await pool.query("INSERT INTO message_board (username, message, date) VALUES ($1, $2, $3)", newData )
}

module.exports = {
    getMessageBoard,
    insertPost,
}