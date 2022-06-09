import jwt from "jsonwebtoken";

const submitButton = document.querySelector("#submitButton");
const passwordInput = document.querySelector("#passwordInput");


console.log(submitButton);
console.log(passwordInput);

// 로그인 해서만 접근하다고 했을때 임, 로그인 안하고 url로접근시 따로 그 부분 처리하는거 해줘야함.
const userToken = sessionStorage.getItem("token");
const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
const jwtDecoded = jwt.verify(userToken, secretKey);
const userId = jwtDecoded.userId;
console.log(userId)


submitButton.addEventListener("click", async function(e){
  e.preventDefault();
  // 입력된 비밀번호를 통해서 DB에서 삭제를 진행하는 코드.
  
  const res = await fetch(`/api/user / ${ userId }`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })


  console.log(passwordInput.value);
});
