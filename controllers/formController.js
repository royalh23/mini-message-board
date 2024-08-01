const messages = require('../utils/messages');

const getForm = (req, res) => {
  res.render('form', { title: 'Add message' });
};

const postForm = (req, res) => {
  const { message, name } = req.body;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect('/');
};

module.exports = { getForm, postForm };
