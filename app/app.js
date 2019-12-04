const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { PlainError } = require('./utils/errors');

const responses = require('./responses/responses');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

app.use((req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
});

app.use((req, res, next) => {
  next(new PlainError(responses.NOT_FOUND));
});

app.use((err, req, res, next) => { // eslint-disable-line
  console.log(err);
  const result = Object.assign({}, responses[err.status], err);
  const {
    status,
    message,
    httpStatus,
  } = result;

  res.status = httpStatus;

  res.json({
    status,
    message,
  });
});

module.exports = app;
