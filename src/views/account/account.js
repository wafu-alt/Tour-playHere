const menuContainer = document.querySelector("#menu-container");

const adminPage = () => {
    // TODO : 관리자인지 확인하는 api를 사용해서 관리지안지 확인,
    //        임의로 로그인한 이메일이 ekdh0858@naver.com이면 관리자로 인지.
    
    const loginId = sessionStorage.getItem("loginId");
    
    if (loginId == "0604@gmail.com") {
        // 관리자 페이지를 확인하고 싶으시다면 if조건문 안에 이메일을 로그인할 이메일로 바꿔주심 됩니다.
        menuContainer.innerHTML += `
        
          <a class="menu-card" href="/account/adminUpdate">
            <div class="menu-icon">
              <span class="icon has-text-info">
              <i class="fa-solid fa-person-circle-plus"></i>
              </span>
            </div>
            <div class="menu-body">
              <p class="title is-3">관리자 관리</p>
              <p class="subtitle is-5">관리자 임명을 할 수 있습니다.</p>
            </div>
          </a>
        `
    }
}

adminPage();