const path = require('node:path');
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/new', formRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
