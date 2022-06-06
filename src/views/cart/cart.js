// import res from "express/lib/response";
import * as Api from "/api.js";

//서버와 통신 불러오기 연습 중
// console.log(Api.get("http://localhost:5000/api/packagelist"));
// console.log(Api.get("/api/packagelist"));
// async function test() {
//   const res = await fetch("http://localhost:5000/api/packagelist");
//   return res;
// }
// console.log(test());
// console.log(fetch("http://localhost:5000/api/packagelist"));

//스토리지 추가하기 연습중
// localStorage.setItem("test", [1, 2]);
// alert(localStorage.length());
// sessionStorage.setItem("testStore", "value값");
/* 
// 로그인 api 요청
  try {
    const data = { email, password };

    const result = await Api.post("/api/login", data);
    const token = result.token;
    console.log(result);
    // 로그인 성공, 토큰을 세션 스토리지에 저장
    // 물론 다른 스토리지여도 됨
    sessionStorage.setItem("token", token);

    alert(`정상적으로 로그인되었습니다.`);

    // 로그인 성공

    // 기본 페이지로 이동
    window.location.href = "/";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
*/
console.log(1);
async function test() {
  const result = await Api.get("/api", "packagelist");
  console.log(result);
  return result;
}

test();
