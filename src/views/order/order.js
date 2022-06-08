import * as Api from "/api.js";
// async function get() {
//   const res = await fetch("/api/users", {
//     // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
//     headers: {
//       Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//     },
//   });

//   if (!res.ok) {
//     const errorContent = await res.json();
//     const { reason } = errorContent;

//     throw new Error(reason);
//   }

//   const result = await res.json();
//   console.log(res);
//   return result;
// }
// get();
//유저 정보 불러오기
async function userTest() {
  const nowLoginIdEmail = sessionStorage.getItem("nowLoginId");
  console.log(nowLoginIdEmail); //1234@naver.com

  const res = await Api.get("/api/useremail", nowLoginIdEmail);
  //GET 요청: /api/useremail/1234@naver.com
  const { fullName, email, phoneNumber, telNumber } = res;
}

async function productTest() {
  const urlPathname = window.location.pathname;
  const productId = urlPathname
    .split("/")
    .filter((element) => element !== "")[1];
  console.log(1, productId);
  /* 상품 번호로 상품 정보 불러오기 */
  const res = await Api.get("/api/package", productId);
  console.log(res);
  // const { packageName, days, totalNumber, countNumber, substance } = res;

  // const cartToken = sessionStorage.getItem("cartToken");
  // cartToken.forEach((element) => console.log(element));
  // const persons = "";
  // console.log(cartToken);
  // console.log(productId, cartToken.objectId);
  // if (productId === cartToken.objectId) {
  //   persons = cartToken.persons;
  // }
  // console.log(persons);
}

function renderHtml() {
  const inner = document.querySelector("#container #inner");
  // userTest(); //유저 정보 불러오기
  productTest(); //상품 정보 불러오기

  inner.insertAdjacentHTML(
    "beforeend",
    `<!-- 예약정보 -->
    <section id="infoBox" class="box">
      <label id="infoLabel" class="label">예약정보</label>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">이름</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="예약자 성함을 적어주세요."
              value =""
            />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">이메일</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="E-mail@Email.com"
              value =""
            />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">휴대전화</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input class="input" placeholder="-없이 적어주세요" value ="" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">일반전화</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input class="input" placeholder="-없이 적어주세요" value ="" />
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">요청사항</label>
        <div class="control">
          <textarea
            class="textarea"
            rows="3"
            placeholder="요청사항을 적어주세요."
          ></textarea>
        </div>
      </div>
    </section>

    <!-- 결제정보 -->
    <section id="paymentBox" class="box">
      <label id="infoLabel" class="label">결제정보</label>

      <div class="field">
        <label class="label">주문상품</label>
        <p id="productInfo">
          상품 제목 상품 제목 상품 제목 상품 제목 상품 제목 상품 제목 상품
          제목 상품 제목 상품 제목
        </p>
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

      <button id="orderBtn" class="button is-success">예약하기</button>
    </section>`
  );
}
renderHtml();
