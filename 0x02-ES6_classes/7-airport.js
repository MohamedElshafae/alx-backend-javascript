export default class Airport {
  constructor(name, code) {
    if (typeof code === 'string' && typeof name === 'string') {
      this._code = code;
      this._name = name;
    }
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
