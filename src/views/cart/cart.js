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

async function selectProductDelFnc() {
  console.log("삭제버튼을 눌렀습니다", this);
  console.log(this.getAttribute("id").split("-")[1]);
  console.log(this.parentNode.parentNode);
  // 상품을 찾아서 삭제하기 그리고 장바구니에 반영하기
  let checkedArray = [];
  checkedArray.push(this.getAttribute("id").split("-")[1]);
  this.parentNode.parentNode.remove();

  //현재 로그인 된 토큰 가져오기
  const nowLoginIdEmail = sessionStorage.getItem("nowLoginId");
  //cart 토큰 가져오기
  const cartToken = JSON.parse(sessionStorage.getItem("cartToken"));
  if (!cartToken) return;
  const cartListData = cartToken.filter((element) => {
    return element.email === nowLoginIdEmail;
  });

  //로그인 사용자의 장바구니 리스트를 고르기

  let nowLoginCartlist = cartListData.filter((element) =>
    checkedArray.includes(element.objectId)
  );

  //로그인 사용자 장바구니 리스트에서 선택한 장바구니를 빼기
  let nowLoginDelCartlist = cartToken.filter((element) => {
    if (nowLoginCartlist.includes(element) === false) return true;
  });

  if (nowLoginDelCartlist.length === 0) return console.log("리턴됨");
  console.log("cartToken make");
  sessionStorage.setItem("cartToken", JSON.stringify(nowLoginDelCartlist));
}

//상품 체크박스 선택해제 했을때 "선택상품정보" 원래대로 돌리기
function resetRenderProductInfo() {
  console.log("선택이 해제 되었습니다.");
  const allCheckbox = document.querySelector("#allCheckbox");
  const paymentBox = document.querySelector("#paymentBox");
  allCheckbox.checked = false;
  paymentBox.innerHTML = ` <label id="infoLabel" class="label">선택상품정보</label>
  <div class="field is-horizontal">
    <div class="field-label is-normal labeInfo">
      <label class="label">상품명</label>
    </div>
    <div class="field-body">
      <p id="productInfo" class="control price">
        -
      </p>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal labeInfo">
      <label class="label">예약 가능 인원</label>
    </div>
    <div class="field-body">
      <p id="counterPersons" class="control price">
        - / - 명  
      </p>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal labeInfo">
      <label class="label">상품가격</label>
    </div>
    <div class="field-body">
        <p id="productPrice" class="control price">
          - 원
        </p>
    </div>
  </div>   

  <div class="field is-horizontal">
    <div class="field-label is-normal labeInfo">
      <label class="label">유류할증료</label>
    </div>
    <div class="field-body">
        <p id="fuelSurcharge" class="control price">
          - 원
        </p>
    </div>
  </div>   

  <div class="field">
    <label class="label title is-4">총 결제금액</label>
    <p id="productTotalPrice">
      - 원
    </p>
  </div>

  <button id="orderBtn" class="button is-success">예약하러가기</button>
  `;
  const orderBtn = document.querySelector("#orderBtn");
  orderBtn.addEventListener("click", orderFnc); //예약하러가기
}

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
  return res;
}

//토큰에서 로그인 아이디 검증구분하기
async function loadedCartToken() {
  //현재 로그인 된 토큰 가져오기
  const nowLoginIdEmail = sessionStorage.getItem("nowLoginId");
  console.log(nowLoginIdEmail);

  //cart 토큰 가져오기
  const cartToken = JSON.parse(sessionStorage.getItem("cartToken"));
  if (!cartToken) return;
  const cartListData = cartToken.filter((element) => {
    return element.email === nowLoginIdEmail;
  });
  console.log(cartListData);
  console.log(cartListData.length);

  //장바구니 토큰에서 매칭시켜서 리스트 html에 뿌려주기
  const onelineCartList = document.querySelector("#onelineCartList");
  for (let i = 0; i < cartListData.length; i++) {
    const data = await loadedProduct(cartListData[i].objectId);
    onelineCartList.insertAdjacentHTML(
      "beforeend",
      `<ul class="lineElemetns" value="${data._id}">
        <input 
          id="checkBox-${data._id}" class="selectCheckboxs" type="checkbox"  
        >
        <li class="imgBox">
          <a href="/product/detail/${data._id}">
            <img src="${data.imgUrl}" alt="여행상품">
          </a>
        </li>
        <li class="selectProductTitle">
          <a href="/product/detail/${data._id}"><p>
            ${data.days - 1}박 ${data.days}일 ${data.packageName}
          </p></a>
        </li>
        <li class="selectProductPrice">
          <p>${data.price.toLocaleString("ko-KR")}원</p>
        </li>
        <li>
          <button id="selectProductDel-${data._id}" class="delete"></button>
        </li>
      </ul>`
    );
    const checkBox = document.querySelector(`#checkBox-${data._id}`);
    console.log("selectCheckbox", checkBox);
    checkBox.addEventListener("change", selectCheckboxFnc);
    //삭제버튼
    const selectProductDel = document.querySelector(
      `#selectProductDel-${data._id}`
    );
    console.log("삭제버튼 추가됬나?", selectProductDel);
    selectProductDel.addEventListener("click", selectProductDelFnc);
  }

  //상품 체크박스 클릭 했을때 "선택상품정보"에 표시하기
  async function selectCheckboxFnc() {
    console.log("선택박스 클림함");
    const selectCheckboxs = document.querySelectorAll(".selectCheckboxs");
    const allCheckbox = document.querySelector("#allCheckbox");
    console.log("allCheckbox", allCheckbox);

    if (this.checked === true) {
      for (let i = 0; i < selectCheckboxs.length; i++) {
        selectCheckboxs[i].checked = false;
      }
      allCheckbox.checked = false;
      this.checked = true;

      const objectId = this.getAttribute("id").split("-")[1];
      const res = await Api.get("/api/package", objectId);
      console.log(res);
      const { packageName, days, countNumber, totalNumber, price } = res;
      //선택상품 정보 표시

      paymentBox.innerHTML = `<label id="infoLabel" class="label">선택상품정보</label>
        <div class="field is-horizontal">
          <div class="field-label is-normal labeInfo">
            <label class="label">상품명</label>
          </div>
          <div class="field-body">
            <p id="productInfo" class="control price">
              ${days - 1}박${days}일 ${packageName}
            </p>
          </div>
        </div>
  
        <div class="field is-horizontal">
          <div class="field-label is-normal labeInfo">
            <label class="label">예약 가능 인원</label>
          </div>
          <div class="field-body">
            <p id="counterPersons" class="control price">
              ${countNumber}/${totalNumber}명  
            </p>
          </div>
        </div>
  
        <div class="field is-horizontal">
          <div class="field-label is-normal labeInfo">
            <label class="label">상품가격</label>
          </div>
          <div class="field-body">
              <p id="productPrice" class="control price">
                ${price.toLocaleString("ko-KR")}원
              </p>
          </div>
        </div>   
  
        <div class="field is-horizontal">
          <div class="field-label is-normal labeInfo">
            <label class="label">유류할증료</label>
          </div>
          <div class="field-body">
              <p id="fuelSurcharge" class="control price">
              ${(price * 0.1).toLocaleString("ko-KR")}원
              </p>
          </div>
        </div>   
  
        <div class="field">
          <label class="label title is-4">총 결제금액</label>
          <p id="productTotalPrice">
            ${(price + price * 0.1).toLocaleString("ko-KR")}원
          </p>
        </div>
  
        <button id="orderBtn" class="button is-success">예약하러가기</button>`;
      //예약하러가기
      const orderBtn = document.querySelector("#orderBtn");
      orderBtn.addEventListener("click", orderFnc);

      return console.log("랜더링");
    }
    resetRenderProductInfo();
    return console.log("다시 원상태");
  }
}
loadedCartToken();

const allCheckbox = document.querySelector("#allCheckbox");
const allCheckSelect = document.querySelector("#allCheckSelect");
const selectCheckDel = document.querySelector("#selectCheckDel");
const orderBtn = document.querySelector("#orderBtn");
const paymentBox = document.querySelector("#paymentBox");

//전체선택을 눌렀을 시 기능
function checkAllFnc() {
  const selectCheckboxs = document.querySelectorAll(".selectCheckboxs");
  //전체선택
  if (!allCheckbox.checked) {
    allCheckbox.checked = true;
    for (let i = 0; i < selectCheckboxs.length; i++) {
      if (!selectCheckboxs[i].checked) {
        selectCheckboxs[i].checked = true;
      }
    }
    return;
  }
  //전체 선택 해제
  if (allCheckbox.checked) {
    allCheckbox.checked = false;
    for (let i = 0; i < selectCheckboxs.length; i++) {
      if (selectCheckboxs[i].checked) {
        selectCheckboxs[i].checked = false;
      }
    }
    resetRenderProductInfo();
    return;
  }
}

//선택삭제 눌렀을 시 기능
async function checkDelFnc() {
  const selectCheckboxs = document.querySelectorAll(".selectCheckboxs");
  let checkedArray = [];
  //선택된것을 찾아서 삭제하기
  for (let i = 0; i < selectCheckboxs.length; i++) {
    if (selectCheckboxs[i].checked) {
      checkedArray.push(selectCheckboxs[i].parentNode.getAttribute("value"));
      selectCheckboxs[i].parentNode.remove();
    }
  }

  //현재 로그인 된 토큰 가져오기
  const nowLoginIdEmail = sessionStorage.getItem("nowLoginId");
  //cart 토큰 가져오기
  const cartToken = JSON.parse(sessionStorage.getItem("cartToken"));
  if (!cartToken) return;
  const cartListData = cartToken.filter((element) => {
    return element.email === nowLoginIdEmail;
  });

  //로그인 사용자의 장바구니 리스트를 고르기
  let nowLoginCartlist = cartListData.filter((element) =>
    checkedArray.includes(element.objectId)
  );

  //로그인 사용자 장바구니 리스트에서 선택한 장바구니를 빼기
  let nowLoginDelCartlist = cartToken.filter((element) => {
    if (nowLoginCartlist.includes(element) === false) return true;
  });

  if (nowLoginDelCartlist.length === 0) return console.log("리턴됨");
  console.log("cartToken make");
  sessionStorage.setItem("cartToken", JSON.stringify(nowLoginDelCartlist));
}

function orderFnc() {
  //object id를 받아서 주문결제페이지로 감
  const selectCheckboxs = document.querySelectorAll(".selectCheckboxs");
  const allCheckbox = document.querySelector("#allCheckbox");
  console.log("selectCheckboxs 오더", selectCheckboxs);
  console.log(allCheckbox.checked === true);
  let productId = [];
  for (let i = 0; i < selectCheckboxs.length; i++) {
    if (selectCheckboxs[i].checked === true) {
      productId.push(selectCheckboxs[i].getAttribute("id").split("-")[1]);
    }
  }

  console.log(productId);
  console.log(!productId);
  if (productId.length > 1) return alert("다중선택하셨습니다");
  if (productId.length === 0) return alert("선택 상품이 없습니다.");
  // alert("오더페이지로 이동");
  window.location.href = `/order/${productId}`;
}

allCheckbox.addEventListener("click", checkAllFnc); //전체선택 체크박스
allCheckSelect.addEventListener("click", checkAllFnc); //전체선택
selectCheckDel.addEventListener("click", checkDelFnc); //선택삭제
orderBtn.addEventListener("click", orderFnc); //예약하러가기
