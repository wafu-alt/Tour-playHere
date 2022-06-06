// 계정관리 페이지에서 주문조회, 회원정보 관리, 제품 판매, 회원 탈퇴를 눌렀을때 보일 네비게이션 바 입니다.
// navbar라는 아이디를 가진 부분에 innerHTML로
// 누르면 연결된 페이지로 이동하는 li들을 만들어줍니다.

// account_main.js와 다른점은 계정관리 li가 있다는 것입니다.

let loginCheck = document.querySelector("#navbar");

if (sessionStorage.getItem("token")) {
  loginCheck.innerHTML = `
    <li><a href="/account">계정관리 </a></li>
    <li><a id="logOut"href="#"> 로그아웃 </a></li>
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
  window.location.href = "/";
});
