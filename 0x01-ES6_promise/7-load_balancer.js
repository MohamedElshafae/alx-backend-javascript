export default async function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to wait for the first promise to resolve
  const result = await Promise.race([chinaDownload, USDownload]);

  // Return the value of the resolved promise
  return result;
}
