import * as Api from "/api.js";

const submitButton = document.querySelector("#submitButton");
const passwordInput = document.querySelector("#passwordInput");
const nowLoginId = sessionStorage.getItem("nowLoginId");

console.log(submitButton);
console.log(passwordInput);

// 로그인 해서만 접근하다고 했을때 임, 로그인 안하고 url로접근시 따로 그 부분 처리하는거 해줘야함.



submitButton.addEventListener("click", async function(e){
  e.preventDefault();
  // 입력된 비밀번호를 통해서 DB에서 삭제를 진행하는 코드.
  const response = await Api.get(`/api/useremail/${nowLoginId}`);
  const userId = response._id;
  const password = response.password;
  // 비밀번호가 맞다면 회원 탈퇴를 진행한다.
  if (passwordInput.value == password) {
    const res = await fetch(`/api/user / ${ userId }`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
 }else{alert("비밀번호가 틀립니다.")}
  


  console.log(passwordInput.value);
});
