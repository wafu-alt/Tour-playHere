import * as Api from "/api.js";

const packageNameInput = document.querySelector("#packageNameInput");
const categorySelectBox = document.querySelector("#categorySelectBox");
const subCategorybox = document.querySelector("#subCategorybox");
const priceInput = document.querySelector("#priceInput");
const detailDescriptionInput = document.querySelector("#detailDescriptionInput");
const totalInput = document.querySelector("#totalInput");
const departureAt = document.querySelector("#departureAt");
const arriveAt = document.querySelector("#arriveAt");

const submitButton = document.querySelector("#submitButton");

// packageName,category,country,price,days,departureAt,arrivalAt,totalNumber,
// imgUrl,substance,

submitButton.addEventListener("click", async function (e) {
    e.preventDefault();
   

    const bodyData = {
        packageName: packageNameInput.value,
        category: categorySelectBox.options[categorySelectBox.selectedIndex].value,
        country: subCategorybox.options[subCategorybox.selectedIndex].value,
        price: priceInput.value,
        days: 3,
        departureAt: departureAt.value,
        arrivalAt: arriveAt.value,
        totalNumber: totalInput.value,
        imgUrl: "https://stylezineblog.com/4137",
        substance:detailDescriptionInput.value
    }

    addPackage(bodyData);
})



async function addPackage(bodyData) {
    const data = JSON.stringify(bodyData);
    const res = await fetch("/api/package", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: data,
    })
    window.location.href = "/account/sell/";
    
} 

// 국가 카테고리와 서브 카테고리 option넣어주는 것들 <option value="국내">국내</option>
async function categoryLoad() {   
    const res = await Api.get("/api/category", "list");
    categorySelectBox.innerHTML=`<option value="국가를 선택">국가를 선택하세요.</option>`
    res.forEach((data) => {
        // console.log(Object.keys(data)[0]);
        categorySelectBox.innerHTML += `
        <option value="${Object.keys(data)[0]}">${Object.keys(data)[0]}</option>
        `
    })
}


async function subcategoryLoad() {
    const categoryValue = categorySelectBox.options[categorySelectBox.selectedIndex].value;

    const res = await Api.get("/api/category", "list");
    // console.log(res[categoryValue]);
    res.forEach((data) => {
        // console.log(data);
        // subCategorybox.innerHTML += `
        // <option value="${Object.keys(data)[0]}">${Object.keys(data)[0]}</option>
        // `
    })
}

categorySelectBox.onchange = subcategoryLoad;

categoryLoad();
// subcategoryLoad();