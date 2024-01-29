export default function hasValuesFromArray(set, array) {
  let flag = true;
  // eslint-disable-next-line consistent-return
  array.forEach((element) => {
    if (!set.has(element)) {
      flag = false;
      return false;
    }
  });
  return flag;
}
