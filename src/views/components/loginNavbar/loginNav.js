let loginCheck = document.querySelector("#navbar");

const loginHTMLInMain = () => {
  // 로그인 했을때 메인 화면 Nav
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
  logoutBtnActive();
};

const noLoginHTMLInMain = () => {
  // 로그인 안했을때 메인화면 Nav
  loginCheck.innerHTML = `
      <li ><a href="/login">로그인</a></li>
              
      <li><a href="/register">회원가입</a></li>
      <li>
                <a href="#cart" aria-current="page">
                  <span class="icon">
                    <i class="fas fa-cart-shopping"></i>
                  </span>
                  <span>카트</span>
                </a>
      </li>
        `;
};

const accountMainHTML = () => {
  // 계정관리 메인 화면 Nav
  if (!sessionStorage.getItem("token")) {
    alert("로그인이 필요한 서비스입니다.");
    window.location.href = "/login";
    return;
  }

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
  logoutBtnActive();
};

const accountCategoryInHTML = () => {
  // 계정관리 메인 화면에서 카테고리를 눌렀을때 Nav
  if (!sessionStorage.getItem("token")) {
    alert("로그인이 필요한 서비스입니다.");
    window.location.href = "/login";
    return;
  }
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
  logoutBtnActive();
};

const logoutBtnActive = () => {
  // 로그인 했을때 생기는 로그아웃 기능 추가하는 버튼
  const logOut = document.querySelector("#logOut");

  logOut.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nowLoginId");
    window.location.href = "/";
  });
};
const navBarLoad = () => {
  // url에 맞는 Nav로딩하기
  if (document.location.href == "http://localhost:5000/") {
    if (sessionStorage.getItem("token")) {
      loginHTMLInMain();
    } else {
      noLoginHTMLInMain();
    }
  } else {
    switch (document.location.href) {
      case "http://localhost:5000/account/":
        accountMainHTML();
        break;

      case "http://localhost:5000/account/orders/":
      case "http://localhost:5000/account/deleteAccount/":
      case "http://localhost:5000/account/sell/":
      case "http://localhost:5000/account/userUpdate/":
      case "http://localhost:5000/account/adminUpdate/":
        accountCategoryInHTML();
        break;
      default:
        alert("loginNav.js에서 경로를 수정해주세요.경로가 잘못됬습니다.");
    }
  }
};

navBarLoad();
