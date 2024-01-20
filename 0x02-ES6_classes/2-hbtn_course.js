export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') { throw new TypeError('Name must be a string'); } else { this._name = name; }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); } else { this._length = length; }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) { throw new TypeError('Students must be an array'); } else { this._students = students; }
  }
}
