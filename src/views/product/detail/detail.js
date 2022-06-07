import * as Api from "/api.js";


async function Data() {
 
  console.log(window.location.pathname) 
  // result : /product/detail/629dbba1251a88738ef214b6/
  
  const urlPathname = window.location.pathname;
  const productId = urlPathname.split("/").filter((element,i) => element !== "")[2]
  console.log(productId) //62996552d8674984f2b07073

  /* 상품 정보 불러오기 */
  const res = await Api.get("/api/package", productId);
  const {packageName  ,days, totalNumber, imgUrl, substance} = res
  const price = res.price.toLocaleString('ko-KR')
  const departureAt = res.departure.split("T")[0]

  /* 아래 html을 삽입 */
  const body = document.querySelector("body");
  body.insertAdjacentHTML(
    "beforeend",

    `<article id="container" class="p-6" >
      <section id="inner" class="columns" >
        <div id="imgArea" class="column is-half">
          <figure class="image is-400x400">
            <img src="${imgUrl}" alt="상품 이미지">
          </figure>
        </div>
        <div id="textArea" class="column is-half">
          <div class="mb-6">
            <h3 class="title is-3">${days-1}박${days}일의 ${packageName}여행</h3>
            <hr>
            <div id="tourDes">
              <p class="title is-5 has-text-left">${price}원</p>
              <p>${substance}</p>
            </div>
            <hr class="mt-6">
            <div class="mt-1 pt-1">
              <label id="howPerson" for="howPerson">인 원</label>
              <input id="howPersonInput" class="input is-info" type="text" placeholder="최대 ${totalNumber}명입니다." ><br>
              <label id="startDays" for="start">출발일 선택</label>
              <input id="startDaysInput" type="date" name="start"  value="${departureAt}" >
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

  /* 버튼을 위한 dom 가져오기 */
  const cartAddBtn = document.querySelector("#cartAddBtn");
  const orderBtn = document.querySelector("#orderBtn");
  const howPersonInput = document.querySelector("#howPersonInput");
  const startDaysInput = document.querySelector("#startDaysInput").value;

  //로그인 중인지 체크
  function loginCheck() {
    if (sessionStorage.getItem("token")) {
      console.log("로그인 중");
      return true;
    }
    alert(`로그인된 사용자만 사용 가능합니다.`);
        return false;
  }

  //인원 체크하는 기능
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

  //출발일 이전 선택 체크하는 기능
  function beforedDepartureAt () {
    
  }

  //장바구니추가 버튼 기능
  function cartAddFnc() {
    const loginChecking = loginCheck();

    if (loginChecking) {
      window.location.href = `/cart`; //-> veiws/cart/cart.html
    }
  }

  //예약하러가기 버튼 기능
  function orderFnc() {
    const loginChecking = loginCheck();

    //todo : 2개의 값을 넘겨야함 - 인원, 출발일, 오브젝트 아이디
    console.log(howPersonInput.value);
    console.log(startDaysInput);

    
    if (loginChecking) {
      const persons = Number(howPersonInput.value);
      const maxPersons = 7; //todo : 최대인원에 대한 정보가 있을경우 연결해주기
      const personsChecking = personsCheck(persons, maxPersons);
      if (personsChecking) {
        window.location.href = `/order`; //-> veiws/order/order.html
      }
    }
  }

  cartAddBtn.addEventListener("click", cartAddFnc);
  orderBtn.addEventListener("click", orderFnc);
}
Data();


/*
//버튼 클릭시 토큰 생성
const addToken = {
  // _id: `${data.pacakge_id}`,
  // departureAt: `${startDaysInput}`,
  // days: `${data.days}`,
  // arrivalAt: `${startDaysInput + data.days}`,
  id : 123124,
  dsfa : "dafea",
};

// sessionStorage.setItem("cartToken", JSON.stringify(addToken));
// console.log(sessionStorage.getItem("cartToken", addToken));
*/