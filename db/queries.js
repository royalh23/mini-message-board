const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT messages.username, messages.message, messages.created_date FROM messages',
  );
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query(
    'SELECT messages.id, messages.username, messages.message, messages.created_date FROM messages WHERE messages.id = $1',
    [id],
  );
  return rows;
}

async function postMessage(username, message) {
  await pool.query(
    'INSERT INTO messages (username, message, created_date) VALUES ($1, $2, $3)',
    [username, message, new Date()],
  );
}

module.exports = { getAllMessages, getMessageById, postMessage };
