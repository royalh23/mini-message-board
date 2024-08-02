const messages = require('../utils/messages');

const getIndex = (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
};

const getMessage = (req, res) => {
  const { idx } = req.params;
  const { user, text, added } = messages[idx];
  res.render('message', { title: 'Message details', user, text, added });
};

module.exports = { getIndex, getMessage };
