import * as Api from "/api.js";

const ordersContainer = document.querySelector("#ordersContainer");
const today = new Date();
const todayDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// 로그인한 사용자의 주문을 조회하는 페이지 로딩
async function loadPage() {
  const res = await Api.get("/api", "orders");

  console.log(res);
  // const fetchData = await fetch("../orders_sample.json").then((response) =>
  //   response.json()
  // );
  // TODO : 모든 주문서?? 들을 볼수있는 api활용해서 데이터 가져오기
  //  innerHTML안의 data를 다루는 부분도 그에따라 수정해야함
  //  가져온 데이터 에서 로그인한 사람의 데이터를 가져오기

  res.forEach((data) => {
    const date = data.departureAt.substr(0, 10);
    const departureAt = new Date(data.departureAt);

    if (data.email == sessionStorage.getItem(loginId)) {
      if (today < departureAt) {
        ordersContainer.innerHTML += `
      <div class="columns orders-item" id="${date}">
        <div class="column is-2">${data.packageName}</div>        
        <div class="column is-2">상품 준비중</div>
        <div class="column is-2">
          <button class="button" id="deleteButton-${data.index}">주문 취소</button>
        </div>
      </div>`;

        const deleteButton = document.querySelector(
          `#deleteButton-${data._id}`
        );
        console.log(deleteButton);
        deleteButton.addEventListener("click", async function () {
          const res = await fetch(`/api/order/${data._id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          });
          alert(`${data._id}삭제함`);
          window.location.href = "/account/orders";
        });
      }
    }
  });
}

// 로그인한 사용자가 관리자 일때 모든 주문을 조회하는 페이지 로딩
async function adminPageLoad() {
  const res = await Api.get("/api", "orders");
  // const result = await res.json();
  console.log(res);
  // const fetchData = await fetch("../orders_sample.json").then((response) =>
  //   response.json()
  // );
  const category = document.querySelector("#category");
  category.innerHTML = `
            <div class="column is-2">출발일</div>
            <div class="column is-4">상품 명</div>
            <div class="column is-2">신청자 아이디</div>
            <div class="column is-2">상태</div>
            <div class="column is-2">신청</div>
  `;

  res.forEach((data) => {
    const date = data.departureAt.substr(0, 10);
    const departureAt = new Date(data.departureAt);

    if (today < departureAt) {
      ordersContainer.innerHTML += `
        <div class="columns orders-item" id="${data._id}">
          <div class="column is-2">${date}</div>
          <div class="column is-4 order-summary">${data.packageName}</div>
          <div class="column is-2">${data.email}</div>
          <div class="column is-2">상품 준비중</div>
          <div class="column is-2">
          <button class="button" id="deleteButton-${data._id}">주문 취소</button>
        </div>
      </div>`;

      const deleteButton = document.querySelector(`#deleteButton-${data._id}`);
      console.log(deleteButton);
      deleteButton.addEventListener("click", async function () {
        const res = await fetch(`/api/order/${data._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        alert(`${data._id}삭제함`);
        window.location.href = "/account/orders";
      });
    }
  });
}

async function pageload() {
  const loginId = sessionStorage.getItem("nowLoginId");
  const res = await fetch(`/api/useremail/${loginId}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    const errorContent = await res.json();
    const { reason } = errorContent;

    throw new Error(reason);
  }
  const result = await res.json();
  if (result.role == "admin") {
    //관리자인지 확인
    adminPageLoad();
    // 관리자가 맞다면 adminPageLoading()
  } else {
    loadPage();
    // 관리자가 아니라면 loadPage()
  }
}

pageload();
