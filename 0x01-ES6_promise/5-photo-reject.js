export default function uploadPhoto(filename) {
  return new Promise((res, rej) => rej(Error(`${filename} cannot be processed`)));
}
