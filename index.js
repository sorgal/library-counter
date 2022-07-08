const express = require('express');

const indexRouter = require('./routes/index');
const app = express();
app.use(express.urlencoded());

app.use('/', indexRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT);