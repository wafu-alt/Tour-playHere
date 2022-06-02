import { renderItemDetail } from "./detail-com.js";
console.log(renderItemDetail());
const tripStart = document.getElementById("tripStart");

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
// tripStart.value = date();

body.insertAdjacentHTML(
  "beforeend",

  `<article class="p-6" >
  <section class="columns" >
    <div class="column is-half">
      <figure class="image is-400x400">
        <img src="../../../assets/images/product-korea-jejudo.jpg" alt="제주도 상품">
      </figure>
    </div>
    <div class="column is-half">
      <div class="mb-6">
        <h3 class="title is-3">여행상품 제목</h3>
        <hr>
        <p class="title is-5 has-text-left">XXXX원</p>
        <p>여행 간단한 설명</p>
        <div class="mt-6">
          <label for="start">여행 출발일 선택 : </label>
          <input type="date" name="start" id="tripStart" value="${curDate}" >
        </div>
      </div>
    </div>
    
  </section>

  <section class="columns">
    <div class="column is-half"></div>
    <div class="column columns is-half is-justify-content-space-evenly">
      <button class="button is-warning">장바구니 추가</button>
      <button class="button is-success">예약일 결제하기</button>
    </div>
  </section>
</article>
`
);

/*

<article class="p-6" >
      <section class="columns" >
        <div class="column is-half">
          <figure class="image is-400x400">
            <img src="../../../assets/images/product-korea-jejudo.jpg" alt="제주도 상품">
          </figure>
        </div>
        <div class="column is-half">
          <div class="mb-6">
            <h3 class="title is-3">여행상품 제목</h3>
            <hr>
            <p class="title is-5 has-text-left">XXXX원</p>
            <p>여행 간단한 설명</p>
            <div class="mt-6">
              <label for="start">여행 출발일 선택 : </label>
              <input type="date" name="start" id="tripStart" value="date()" >
            </div>
          </div>
        </div>
        
      </section>

      <section class="columns">
        <div class="column is-half"></div>
        <div class="column columns is-half is-justify-content-space-evenly">
          <button class="button is-warning">장바구니 추가</button>
          <button class="button is-success">예약일 결제하기</button>
        </div>
      </section>
    </article>
*/
