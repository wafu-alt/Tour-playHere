// 아래는 현재 home.html 페이지에서 쓰이는 코드는 아닙니다.
// 다만, 앞으로 ~.js 파일을 작성할 때 아래의 코드 구조를 참조할 수 있도록,
// 코드 예시를 남겨 두었습니다.

import renderItem from "/components/list/item-card.js";
import renderCategoryNavbar from "/components/category_navbar/category_navbar.js";

import * as Api from "/api.js";
import { randomId } from "/useful-functions.js";
import getParams from "../get_params.js";
import renderDropdown from "../components/dropdown/dropdown.js";

// 요소(element), input 혹은 상수
const itemListDiv = document.querySelector(".item-list");
const dropdownDiv = document.querySelector(".dropdown-container");

const categoryNavbarDiv = document.querySelector(".category-navbar");
const titleText = document.getElementById("title");

let params = getParams();
addAllElements();
addAllEvents();

// html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllElements() {
  insertTitleText();
  insertItemsToList();
  insertCategoryNavbar();
  insertDropdown();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {}

function insertTitleText() {
  titleText.innerText = `${params.category} 여행 떠나요!`;
}

async function insertItemsToList(subCategory) {
  itemListDiv.innerHTML = "";
  let data = await fetch("./list_sample.json");
  data = await data.json();
  data
    .filter((e) =>
      subCategory === "전체" || subCategory === undefined
        ? e.category === params.category
        : e.category === params.category && e.city === subCategory
    )
    .forEach((data) => {
      itemListDiv.insertAdjacentElement("beforeend", renderItem(data));
    });
}

function insertCategoryNavbar() {
  categoryNavbarDiv.insertAdjacentElement(
    "beforeend",
    renderCategoryNavbar(params.category)
  );
}

async function insertDropdown() {
  let data = await fetch("./city_list_sample.json").then((response) =>
    response.json()
  );

  dropdownDiv.insertAdjacentElement(
    "beforeend",
    renderDropdown(data[params.category], (selected) => {
      insertItemsToList(selected);
    })
  );
}
