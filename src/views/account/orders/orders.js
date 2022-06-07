const ordersContainer = document.querySelector("#ordersContainer");

// 로그인한 사용자의 주문을 조회하는 페이지 로딩
async function loadPage() {
 
  const fetchData = await fetch("../orders_sample.json").then((response) =>
    response.json()
  );
  // TODO : 모든 주문서?? 들을 볼수있는 api활용해서 데이터 가져오기
  //  innerHTML안의 data를 다루는 부분도 그에따라 수정해야함
  //  가져온 데이터 에서 로그인한 사람의 데이터를 가져오기
           

    fetchData.forEach((data) => {
        ordersContainer.innerHTML += `<div class="columns orders-item" id="${data.index}">
        <div class="column is-2">${data.departureDate}</div>
        <div class="column is-6 order-summary">${data.productName}</div>
        <div class="column is-2">상품 준비중</div>
        <div class="column is-2">
          <button class="button" id="deleteButton-${data.index}">주문 취소</button>
        </div>
      </div>`
    
  });
}



// 로그인한 사용자가 관리자 일때 모든 주문을 조회하는 페이지 로딩
async function adminPageLoading() {
    
  const fetchData = await fetch("../orders_sample.json").then((response) =>
    response.json()
  );

    fetchData.forEach((data) => {
        ordersContainer.innerHTML += `<div class="columns orders-item" id="${data.index}">
        <div class="column is-2">관리자 페이지</div>
        <div class="column is-6 order-summary">의 내용입니다.</div>
        <div class="column is-2">상품 준비중</div>
        <div class="column is-2">
          <button class="button" id="deleteButton-${data.index}">주문 취소</button>
        </div>
      </div>`
    
  });
}

if (sessionStorage.getItem("isLogin") == "ekdh0858@naver.com") { adminPageLoading(); }
// // 관리자 페이지를 확인하고 싶으시다면 if조건문 안에 이메일을 로그인할 이메일로 바꿔주심 됩니다.
else { loadPage(); }