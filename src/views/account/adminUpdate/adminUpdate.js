import * as Api from "/api.js";

const submitButton = document.querySelector("#submitButton");
const accountInput = document.querySelector("#accountInput");
// TODO : 눌러서 해당 이메일의 role부분을 admin으로 만든다.

async function updateAdmin() {
    const response = await Api.get(`/api/useremail/${accountInput.value}`);
    const userId = response._id;
    const userRole = { role:response.role };
    const bodyData = JSON.stringify(userRole)


    const res = await fetch(`/api/useradmin/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: bodyData,
    });
    if (!res.ok) {
        const errorContent = await res.json();
        const { reason } = errorContent;
    
        throw new Error(reason);
      }
    
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("작동 시작")
    updateAdmin();
    console.log("작동 완료")
})