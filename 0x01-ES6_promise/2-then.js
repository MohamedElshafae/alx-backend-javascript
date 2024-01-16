/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((err) => Error);
}
