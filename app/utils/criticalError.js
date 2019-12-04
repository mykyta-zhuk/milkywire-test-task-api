const BaseError = require('./baseError');

class CriticalError extends BaseError {
  constructor(errorObject) {
    super(errorObject);
    this.httpStatus = 200;
  }
}

module.exports = CriticalError;
