const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 3000;

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
