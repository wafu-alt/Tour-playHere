// 로그인 상태일때 계정관리 버튼을 눌렀을때 페이지의 네비게이션 바 입니다.
// navbar라는 아이디를 가진 부분에 innerHTML로
// 누르면 연결된 페이지로 이동하는 li들을 만들어줍니다.

let loginCheck = document.querySelector("#navbar");

if (sessionStorage.getItem("token")) {
  loginCheck.innerHTML = `
                  
            <li>      <a id="logOut" href="#">로그아웃 </a>  </li>
            <li>
                <a href="/cart" aria-current="page">
                  <span class="icon">
                    <i class="fas fa-cart-shopping"></i>
                  </span>
                  <span>카트</span>
                </a>
            </li>
                  `;
}

const logOut = document.querySelector("#logOut");
logOut.addEventListener("click", () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("nowLoginId"); //이메일 토큰 지우기
  window.location.href = "/";
});
