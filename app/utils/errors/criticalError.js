const BaseError = require('./baseError');

class CriticalError extends BaseError {
  constructor(errorObject) {
    super(errorObject);
    this.httpStatus = 500;
  }
}

module.exports = CriticalError;
