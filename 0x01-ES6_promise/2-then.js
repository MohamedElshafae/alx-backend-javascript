/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => {
      console.log('Got a response from the API');
      return { body: 'success', status: 200 };
    })
    .catch((err) => new Error());
}
