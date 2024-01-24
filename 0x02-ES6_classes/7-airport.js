export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `object [${this.code}]`;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }
}
