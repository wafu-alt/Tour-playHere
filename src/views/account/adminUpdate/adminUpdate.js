const submitButton = document.querySelector("#submitButton");
import * as Api from "/api.js";
// TODO : 눌러서 해당 이메일의 role부분을 admin으로 만든다.

async function updateAdmin() {
    const usersData = await Api.get("/api", "users");
    const userData = await Api.get("/api/useremail/:ekdh0858@naver.com" );
    console.log(usersData);
    console.log(userData);
}

updateAdmin();