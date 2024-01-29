export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const list = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      list.push(element.slice(startString.length));
    }
  });

  return list.join('-');
}
