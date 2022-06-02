let loginCheck = document.querySelector("#loginCheck");

if (sessionStorage.getItem("token")) {
  loginCheck.innerHTML = `
                  
                  <a href="/logOut">로그아웃 </a> 
                  
                  `;
}
