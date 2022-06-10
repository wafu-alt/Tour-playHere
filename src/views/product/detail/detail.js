// import { renderItemDetail } from "./detail-com.js";
//console.log(renderItemDetail());

// let data = fetch("./detail-sampleData.json")
// .then (res => res.json())
// .then (value => {
//     console.log(value[0])
//     data = value[0]
//     return data
// })
// .catch((err) => console.log(err))

async function Data() {
  let res = await fetch("./detail-sampleData.json");

  let resData = await res.json();
  const data = resData.filter(
    (data) => data.pacakge_id === "6278ad6f927a0d0520ff626a"
  );

  //return data[0];
  //console.log(data[0].images)

  const body = document.querySelector("body");

  // 여행 출발일 input값 현재 날짜로 고정
  function date() {
    let curDate = new Date();
    let year = curDate.getFullYear();
    let month = "";
    let date = "";
    if (curDate.getMonth() + 1 < 10) {
      month = `0${curDate.getMonth() + 1}`;
    } else {
      month = curDate.getMonth();
    }

    if (curDate.getDate() < 10) {
      date = `0${curDate.getDate()}`;
    } else {
      date = curDate.getDate();
    }

    return `${year}-${month}-${date}`;
  }
  const curDate = date();

  body.insertAdjacentHTML(
    "beforeend",

    `<article id="container" class="p-6" >
      <section id="inner" class="columns" >
        <div id="imgArea" class="column is-half">
          <figure class="image is-400x400">
            <img src="${data[0].images}" alt="제주도 상품">
          </figure>
        </div>
        <div id="textArea" class="column is-half">
          <div class="mb-6">
            <h3 class="title is-3">${data[0].pacakge_name}</h3>
            <hr>
            <div id="tourDes">
              <p class="title is-5 has-text-left">${data[0].price}원</p>
              <p>여행 간단한 설명</p>
            </div>
            <hr class="mt-6">
            <div class="mt-1 pt-1">
              <label id="howPerson" for="howPerson">인 원</label>
              <input id="howPersonInput" class="input is-info" type="text" placeholder="몇명이신가요?" ><br>
              <label id="startDays" for="start">출발일 선택</label>
              <input id="startDaysInput" type="date" name="start"  value="${curDate}" >
            </div>
          </div>
        </div>
        
        
      </section>
    
      <section id="btnArea" class="columns">
        <div class="column is-half"></div>
        <div id="btnBox" class="column">
          <button id="cartAddBtn" class="button is-warning">장바구니 추가</button>
          <button id="orderBtn" class="button is-success">예약하러가기</button>
        </div>
      </section>
    </article>
  `
  );
  const cartAddBtn = document.querySelector("#cartAddBtn");
  const orderBtn = document.querySelector("#orderBtn");
  const howPersonInput = document.querySelector("#howPersonInput");
  const startDaysInput = document.querySelector("#startDaysInput").value;

  function personsCheck(persons, maxPersons) {
    if (persons === 0) {
      alert(`인원을 ${persons}명을 입력하셨습니다.`);
      return false;
    }
    if (persons > maxPersons) {
      alert(`최대 인원을 넘어서 ${persons}명을 입력하셨습니다.`);
      return false;
    }
    return true;
  }

  function cartAddFnc() {
    // console.log(window.location);
    // console.log(window.location.href);
    window.location.href = `/cart`;
    alert("cartAddBtn을 클릭하셨습니다.");
  }

  function orderFnc() {
    console.log(howPersonInput.value);
    console.log(startDaysInput);

    const persons = Number(howPersonInput.value);
    const maxPersons = 7; //todo : 최대인원에 대한 정보가 있을경우 연결해주기
    const checking = personsCheck(persons, maxPersons);
    if (checking === true) {
      window.location.href = `/order`;
    }
    // alert("orderBtn을 클릭하셨습니다.");
  }

  cartAddBtn.addEventListener("click", cartAddFnc);
  orderBtn.addEventListener("click", orderFnc);
}
Data();

let loginCheck = document.querySelector("#navbar");

if (sessionStorage.getItem("token")) {
  loginCheck.innerHTML = `
  <li><a href="/account">계정관리</a></li>
  <li><a href="/account">로그아웃</a></li>
  <li>
      <a href="#cart" aria-current="page">
        <span class="icon">
          <i class="fas fa-cart-shopping"></i>
        </span>
        <span><a href="/cart">카트</span>
      </a>
  </li>
  `;
}
