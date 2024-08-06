const db = require('../db/queries');
const asyncHandler = require('express-async-handler');

const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', {
    title: 'Mini Message Board',
    messages,
  });
});

const getMessage = asyncHandler(async (req, res) => {
  const { idx } = req.params;
  const [{ username, message, created_date }] = await db.getMessageById(idx);
  res.render('message', {
    title: 'Message details',
    username,
    message,
    created_date,
  });
});

module.exports = { getMessages, getMessage };
