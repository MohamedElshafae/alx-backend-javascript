export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) return [];
  return array.reduce((acc, cur) => acc + cur.id, 0);
}
