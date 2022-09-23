import md5 from "md5";

const ts = Date.now();
const privateKey='YOUR_PRIVATE_KEY'
const publicKey= 'YOUR_PUBLIC_KEY'
const hash = md5(`${ts}${privateKey}${publicKey}`);
const apiParams = {
  ts,
  apikey: publicKey,
  hash,
  baseURL: "https://gateway.marvel.com",
};
export default apiParams;
