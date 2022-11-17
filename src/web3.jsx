import { Web3Storage } from "web3.storage";

function makeStorageClient() {
  return new Web3Storage({ token: process.env.REACT_APP_WEB3_KEY });
}
const client = makeStorageClient();
export async function storeFiles(files) {
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}
export async function retrieve(cid) {
  const res = await client.get(
    "bafybeiftpddhkxxvxks7t64gdygpbguest5p6lpwme2qwi3omoc32ww77y"
  );
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  const files = await res.files();
  for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`);
  }
  return files[0].cid;
  // request succeeded! do something with the response object here...
}
