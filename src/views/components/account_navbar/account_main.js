// 로그인 상태일때 계정관리 버튼을 눌렀을때 페이지의 네비게이션 바 입니다.
// navbar라는 아이디를 가진 부분에 innerHTML로
// 누르면 연결된 페이지로 이동하는 li들을 만들어줍니다.
async function navBarLoad(){
  let loginCheck = document.querySelector("#navbar");
  const loginToken = await sessionStorage.getItem("token");
  if (loginToken) {
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
    const logOut = document.querySelector("#logOut");
    logOut.addEventListener("click", () => {
      sessionStorage.removeItem("token");
      window.location.href = "/";
    });
  }
  else
  {
    alert("로그인이 필요합니다.");
    window.location.href="/login"
  }
}

navBarLoad();
