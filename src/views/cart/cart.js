import * as Api from "../api.js";
import mongoose from "mongoose";
const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n";
console.log(DB_URL);

console.log(Api.get);
console.log(Api.get("api", packagelist));

// async function call() {
//   const res = await fetch("http://localhost:5000/api/packagelist");
//   const data = await res.json();
//   console.log(data);
// }
// call();
