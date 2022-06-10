export default function renderUserNavbar() {
  const component = document.createElement("div");
  component.classList = ["navbar-end", "breadcrumb", "my-auto"];
  if (sessionStorage.getItem("token")) {
    component.innerHTML = `
        <ul id="navbar">
        <li><a href="/account">계정관리</a></li>
        <li><a href="/account">로그아웃</a></li>
        <li>
            <a href="#cart" aria-current="page">
              <span class="icon">
                <i class="fas fa-cart-shopping"></i>
              </span>
              <span>카트</span>
            </a>
        </li>
        </ul>
        `;
  } else {
    component.innerHTML = `
        <ul id="navbar">
        <li id="loginCheck"><a href="/login">로그인</a></li>
        
        <li><a href="/register">회원가입</a></li>
        <li>
          <a href="#cart" aria-current="page">
            <span class="icon">
              <i class="fas fa-cart-shopping"></i>
            </span>
            <span>카트</span>
          </a>
        </li>
      </ul>`;
  }

  return component;
}
