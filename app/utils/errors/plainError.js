const BaseError = require('./baseError');

class PlainError extends BaseError {
  constructor(errorObject) {
    super(errorObject);
    this.httpStatus = 200;
  }
}

module.exports = PlainError;
