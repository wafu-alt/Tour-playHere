// 아래는 현재 home.html 페이지에서 쓰이는 코드는 아닙니다.
// 다만, 앞으로 ~.js 파일을 작성할 때 아래의 코드 구조를 참조할 수 있도록,
// 코드 예시를 남겨 두었습니다.

const itemsData = [
  {
    index: 1,
    name: "Seoul",
    category: "국내",
    description: "서울로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Lotte-World.jpg",
  },
  {
    index: 2,
    name: "Paris",
    category: "유럽",
    description: "프랑스로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://file.mk.co.kr/mkde/N0/2021/07/20210701_4899822_1625200068.jpg",
  },
  {
    index: 3,
    name: "Thailand",
    category: "동아시아",
    description: "태국으로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Lotte-World.jpg",
  },
  {
    index: 4,
    name: "Paris",
    category: "북미",
    description: "대전으로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Lotte-World.jpg",
  },
  {
    index: 5,
    name: "Paris",
    category: "남미",
    description: "대전으로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Lotte-World.jpg",
  },
  {
    index: 6,
    name: "Paris",
    category: "국내",
    description: "대전으로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Lotte-World.jpg",
  },
  {
    index: 7,
    name: "Paris",
    category: "유럽",
    description: "대전으로 떠나보세요!",
    departureTime: "2022.5.31~",
    image:
      "https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Lotte-World.jpg",
  },
];

import renderImageItem from "/components/list/image-item-card.js";
import renderItem from "/components/list/item-card.js";
import renderCategoryNavbar from "/components/category_navbar/category_navbar.js";

import * as Api from "/api.js";
import { randomId } from "/useful-functions.js";

// 요소(element), input 혹은 상수
const itemScrollListDiv = document.querySelector(".item-scroll-list");
const leftArrowBtn = document.querySelector("#left-arrow");
const rightArrowBtn = document.querySelector("#right-arrow");

const itemListDiv = document.querySelector(".item-list");

const categoryNavbarDiv = document.querySelector(".category-navbar");

addAllElements();
addAllEvents();

// html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllElements() {
  insertItemsToScrollList();
  insertItemsToList();
  insertCategoryNavbar();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  leftArrowBtn.addEventListener("click", (e) => onHoverScrollArrow("left"));
  rightArrowBtn.addEventListener("click", (e) => onHoverScrollArrow("right"));
}

function insertItemsToScrollList() {
  itemsData.forEach((data) => {
    itemScrollListDiv.insertAdjacentElement("beforeend", renderImageItem(data));
  });
}

function insertItemsToList() {
  itemsData.forEach((data) => {
    itemListDiv.insertAdjacentElement("beforeend", renderItem(data));
  });
}
function insertCategoryNavbar() {
  categoryNavbarDiv.insertAdjacentElement("beforeend", renderCategoryNavbar());
}

function onHoverScrollArrow(direction) {
  let distance;
  switch (direction) {
    case "right":
      distance = 500;
      break;
    case "left":
      distance = -500;
  }
  itemScrollListDiv.scrollBy({ left: distance, behavior: "smooth" });
}

<<<<<<< HEAD
// async function getDataFromApi() {
//   // 예시 URI입니다. 현재 주어진 프로젝트 코드에는 없는 URI입니다.
//   const data = await Api.get("/api/user/data");
//   const random = randomId();

//   console.log({ data });
//   console.log({ random });
// }
=======




>>>>>>> feature-frontend-account
