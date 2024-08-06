const db = require('../db/queries');
const asyncHandler = require('express-async-handler');

const getForm = (req, res) => {
  res.render('form', { title: 'Add message' });
};

const postForm = asyncHandler(async (req, res) => {
  const { name, message } = req.body;
  await db.postMessage(name, message);
  res.redirect('/');
});

module.exports = { getForm, postForm };
