import * as Api from "/api.js";

//로그인 중인지 체크
function loginCheck() {
  if (sessionStorage.getItem("token")) {
    console.log("로그인 중");
    return true;
  }
  alert(`로그인된 사용자만 사용 가능합니다.`);
  window.location.href = "/login";
  return false;
}
loginCheck();

//제품정보 가져오기
/*
arrivalAt: "2022-08-12T00:00:00.000Z"
category: "일본"
countNumber: 2
country: "일본"
days: 3
departureAt: "2022-08-10T00:00:00.000Z"
imgUrl: "https://pix6.agoda.net/geo/city/5085/1_5085_02.jpg?ca=6&ce=1&s=1920x822"
packageName: "도쿄"
price: 700000
substance: "신구의 조화가 절묘한 도시인 도쿄로 떠나보세요!"
totalNumber: 30
__v: 0
_id: "62a0574f75a5ac032202ecfe"
*/
async function loadedProduct(objectId) {
  console.log("loadedProduct:" + objectId);
  const res = await Api.get("/api/package", objectId);
  console.log(res);
}

//토큰에서 로그인 아이디 검증구분하기
async function loadedCartToken() {
  //현재 로그인 된 토큰 가져오기
  const nowLoginIdEmail = sessionStorage.getItem("nowLoginId");
  console.log(nowLoginIdEmail);

  //cart 토큰 가져오기
  const cartToken = JSON.parse(sessionStorage.getItem("cartToken"));
  const cartListData = cartToken.filter((element) => {
    return element.email === nowLoginIdEmail;
  });
  console.log(cartListData);
  console.log(cartListData.length);

  loadedProduct(cartListData[0].objectId);
}
loadedCartToken();

//선택상품 정보 표시
const paymentBox = document.querySelector("#paymentBox");
paymentBox.insertAdjacentHTML(
  "beforeend",
  `<label id="infoLabel" class="label">선택상품정보</label>

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">상품명</label>
  </div>
  <div class="field-body">
    <p id="productInfo" class="control price">상품명</p>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">예약 가능 인원</label>
  </div>
  <div class="field-body">
    <p id="counterPersons" class="control price">30/40명</p>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">상품가격</label>
  </div>
  <div class="field-body">
      <p id="productPrice" class="control price">500,000원</p>
  </div>
</div>   

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">유류할증료</label>
  </div>
  <div class="field-body">
      <p id="fuelSurcharge" class="control price">5,000원</p>
  </div>
</div>   

<div class="field">
  <label class="label title is-4">총 결제금액</label>
  <p id="productTotalPrice">505,000원</p>
</div>

<button id="orderBtn" class="button is-success">예약하러가기</button>`
);

const selectCheckboxs = document.querySelectorAll("#selectCheckbox");
const allCheckSelect = document.querySelector("#allCheckSelect");
const orderBtn = document.querySelector("#orderBtn");
console.log(selectCheckboxs);

function clickFnc() {
  console.log(1);
  // selectCheckboxs[1].checked = true;
}

function orderFnc() {}

allCheckSelect.addEventListener("click", clickFnc);
orderBtn.addEventListener("click", orderFnc);

//for문으로 돌아가면서 출력이 쭉 된다.
//삭제는 this가 삭제될지 안될지..
// 장바구니 된 리스트가 추가 될 곳
/*
`<ul class="lineElemetns">
<input id="selectCheckbox" class="selectCheckboxs" type="checkbox"  >
<li class="imgBox">
  <a href="/product/detail/${_id}"><img src="${imgUrl}" alt="여행상품"></a>
</li>
<li class="selectProductTitle">
  <a href="/product/detail/${_id}"><p>
    ${days-1}박 ${days}일 ${packageName}
  </p></a>
</li>
<li class="selectProductPrice">
  <p>${price}원</p>
</li>
<li>
  <button id="selectProductDel" class="delete"></button>
</li>
</ul>`;


*/

//0509 pratice-03참조
function renderHtml() {
  const onelineCartList = document.querySelector("#onelineCartList");
  console.log(onelineCartList);
  for (let i = 0; i < 5; i++) {
    onelineCartList.insertAdjacentHTML("beforeend", `1<br>`);
  }
}
renderHtml();

/*

//한번 출력 후 값이 없으면 표시 x, 선택에 따라 출력이 바뀌어야함(트리거는 체크박스)
`<label id="infoLabel" class="label">선택상품정보</label>

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">상품명</label>
  </div>
  <div class="field-body">
    <p id="productInfo" class="control price">
      ${days-1}박 ${days}일 ${packageName}
    </p>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">예약 가능 인원</label>
  </div>
  <div class="field-body">
    <p id="counterPersons" class="control price">${countNumber}/${totalNumber}명</p>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">상품가격</label>
  </div>
  <div class="field-body">
      <p id="productPrice" class="control price">${price}원</p>
  </div>
</div>   

<div class="field is-horizontal">
  <div class="field-label is-normal labeInfo">
    <label class="label">유류할증료</label>
  </div>
  <div class="field-body">
      <p id="fuelSurcharge" class="control price">${price*0.1}원</p>
  </div>
</div>   

<div class="field">
  <label class="label title is-4">총 결제금액</label>
  <p id="productTotalPrice">505,000원</p>
</div>

<button id="orderBtn" class="button is-success">예약하러가기</button>`
*/
