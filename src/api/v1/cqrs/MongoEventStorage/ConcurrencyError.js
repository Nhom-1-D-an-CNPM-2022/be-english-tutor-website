// Source: https://github.com/snatalenko/node-cqrs-mongo

const DEFAULT_MESSAGE = "event is not unique";

class ConcurrencyError extends Error {
  static get type() {
    return "ConcurrencyError";
  }

  constructor(message) {
    super(message || DEFAULT_MESSAGE);

    Object.defineProperties(this, {
      type: {
        value: ConcurrencyError.type,
        enumerable: true,
      },
      name: {
        value: ConcurrencyError.type,
        enumerable: true,
      },
    });

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ConcurrencyError;
