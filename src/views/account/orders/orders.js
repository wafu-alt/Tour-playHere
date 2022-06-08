const ordersContainer = document.querySelector("#ordersContainer");

async function loadPage() {
  //console.log("시작");
  const fetchData = await fetch("../orders_sample.json").then((response) =>
    response.json()
    );

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

loadPage();

