import { Web3Storage, getFilesFromPath } from "web3.storage";

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU4ZWMzOTExMDViRkMxNmZEOTZhMzI5ZDlmMWU4NkIyMTUyNThjNDAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njg1MjM5Nzk2MDMsIm5hbWUiOiJ0ZXN0In0.tUgGen-kEVrqA4NC3c6pG4XfkBT-je6RfQQN8-OhlE4";
const client = new Web3Storage({ token });

async function storeFiles(name) {
  const files = await getFilesFromPath(name);
  const cid = await client.put(files);
  console.log(cid);
}

export default storeFiles;
