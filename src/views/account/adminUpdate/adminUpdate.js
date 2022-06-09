import * as Api from "/api.js";

const submitButton = document.querySelector("#submitButton");
const nowLoginId = sessionStorage.getItem("nowLoginId");
// TODO : 눌러서 해당 이메일의 role부분을 admin으로 만든다.

async function updateAdmin() {
    const response = await Api.get(`/api/useremail/${nowLoginId}`);
    const userId = response._id;
    const userRole = response.role;



    const res = await fetch(`/api/useradmin/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: { role: userRole },
    });
    if (!res.ok) {
        const errorContent = await res.json();
        const { reason } = errorContent;
    
        throw new Error(reason);
      }
    
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    updateAdmin();
})