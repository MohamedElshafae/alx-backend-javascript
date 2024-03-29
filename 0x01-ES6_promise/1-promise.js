// eslint-disable-next-line no-unused-vars
export default function getFullResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      res({ status: 200, body: "Success" });
    } else {
      rej(Error("The fake API is not working currently"));
    }
  });
}
