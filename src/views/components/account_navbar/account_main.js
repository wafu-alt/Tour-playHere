let loginCheck = document.querySelector("#navbar");

if (sessionStorage.getItem("token")) {
  loginCheck.innerHTML = `
                  
            <li>      <a href="/logOut">로그아웃 </a>  </li>
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
