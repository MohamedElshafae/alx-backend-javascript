export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
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
