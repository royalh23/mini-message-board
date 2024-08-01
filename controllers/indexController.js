const messages = require('../utils/messages');

const getIndex = (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
};

module.exports = { getIndex };
