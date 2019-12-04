class BaseError extends Error {
  constructor(errorObject) {
    const { status, message } = errorObject;
    super(message);
    this.message = message;
    this.status = status;
  }
}

module.exports = BaseError;
