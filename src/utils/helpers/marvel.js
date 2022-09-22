import md5 from "md5";

const ts = Date.now();
const privateKey='9812ffff3b8aa2c8302b4b3eeccae8670114693c'
const publicKey= 'b851f19c35b735d46106947c516cc797'
const hash = md5(`${ts}${privateKey}${publicKey}`);
const apiParams = {
  ts,
  apikey: publicKey,
  hash,
  baseURL: "https://gateway.marvel.com",
};
export default apiParams;
