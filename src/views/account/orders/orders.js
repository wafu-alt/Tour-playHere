const ordersContainer = document.querySelector("#ordersContainer");

// 로그인한 사용자의 주문을 조회하는 페이지 로딩
async function loadPage() {
  //console.log("시작");
  const fetchData = await fetch("../orders_sample.json").then((response) =>
    response.json()
  );
  // TODO : 모든 주문서?? 들을 볼수있는 api활용하여 데이터 가져오기
  //         그 가져온 데이터 에서 로그인한 사람의 데이터를 가져오기

    fetchData.forEach((data) => {
        ordersContainer.innerHTML += `<div class="columns orders-item" id="${data.index}">
        <div class="column is-2">${data.departureDate}</div>
        <div class="column is-6 order-summary">${data.productName} / 1개</div>
        <div class="column is-2">상품 준비중</div>
        <div class="column is-2">
          <button class="button" id="deleteButton-${data.index}">주문 취소</button>
        </div>
      </div>`
    //console.log(data);
  });
}



// 로그인한 사용자가 관리자 일때 모든 주문을 조회하는 페이지 로딩
const adminPageLoading = () => {
    //console.log("시작");
    // TODO : 모든 주문서?? 들을 볼수있는 api활용해서 데이터 가져오기

    fetchData.forEach((data) => {
        ordersContainer.innerHTML += `<div class="columns orders-item" id="${data.index}">
        <div class="column is-2">${data.departureDate}</div>
        <div class="column is-6 order-summary">${data.productName} / 1개</div>
        <div class="column is-2">상품 준비중</div>
        <div class="column is-2">
          <button class="button" id="deleteButton-${data.index}">주문 취소</button>
        </div>
      </div>`
    //console.log(data);
  });
}

if (sessionStorage.getItem("isAdmin")) { adminPageLoading(); }
else { loadPage(); }