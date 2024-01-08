export default function appendToEachArrayValue(array, appendString) {
  for (let element of array) {
    // eslint-disable-next-line no-unused-vars
    element += appendString;
  }

  return array;
}
