const submitButton = document.querySelector("#submitButton");
import jwt from "jsonwebtoken";
// TODO : 눌러서 해당 이메일의 role부분을 admin으로 만든다.

const userToken = sessionStorage.getItem("token");
const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
const jwtDecoded = jwt.verify(userToken, secretKey);
const userId = jwtDecoded.userId;
const userRole = jwtDecoded.role;

async function updateAdmin() {
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

updateAdmin();