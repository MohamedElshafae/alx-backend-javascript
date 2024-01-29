export default function updateUniqueItems(map) {
  if (typeof map instanceof Map) throw new Error('Cannot process');
  map.forEach((quantaty, item) => {
    if (quantaty === 1) map.set(item, 100);
  });
  return map;
}
