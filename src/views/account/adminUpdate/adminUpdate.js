const submitButton = document.querySelector("#submitButton");
import * as Api from "/api.js";
// TODO : 눌러서 해당 이메일의 role부분을 admin으로 만든다.

async function updateAdmin() {
    const allusersData = await Api.get("/useradmin", "ekdh0858@naver.com");
    console.log("allusers : " + allusersData);
    const data = {
        fullName: "박태훈 유저 업데이트 확인",
        phoneNumber: "010-9221-2858",
        role:"admin"
    }
    const usersData = await Api.patch("/api/user",sessionStorage.getItem("loginId"),data );
    // const userData = await Api.get("/api/useremail" );
    
    console.log("allusers after: "+allusersData);
    // console.log(userData);
}

updateAdmin();