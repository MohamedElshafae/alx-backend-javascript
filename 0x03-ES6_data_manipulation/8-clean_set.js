export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const list = Array.from(set)
    .filter((element) => typeof element === 'string' && element.startsWith(startString))
    .map((element) => element.slice(startString.length));

  return list.join('-');
}
