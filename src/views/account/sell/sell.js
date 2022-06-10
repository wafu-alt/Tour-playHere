import * as Api from "/api.js";

const packageNameInput = document.querySelector("#packageNameInput");
const categorySelectBox = document.querySelector("#categorySelectBox");
const subCategorybox = document.querySelector("#subCategorybox");
const priceInput = document.querySelector("#priceInput");
const detailDescriptionInput = document.querySelector("#detailDescriptionInput");
const totalInput = document.querySelector("#totalInput");
const departureAt = document.querySelector("#departureAt");
const arriveAt = document.querySelector("#arriveAt");
const imageInput = document.querySelector("#imageInput");
const submitButton = document.querySelector("#submitButton");
const fileNameSpan = document.querySelector("#fileNameSpan");
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
        imgUrl: "이미지가 DB에 저장될 경로???",
        substance:detailDescriptionInput.value
    }
    const jsondata = JSON.stringify(bodyData);
    addPackage(jsondata);
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
    subCategorybox.innerHTML = "";
    const res = await Api.get("/api/category", "list");
    // const result = await res.json();
    res.forEach((data) => {
        if (Object.keys(data) == categoryValue) {
            console.log(Object.values(data)[0].length);
            for (let i = 0; i < Object.values(data)[0].length; i++){
                console.log(Object.values(data)[0][i]);
                subCategorybox.innerHTML += `
                <option value="${Object.values(data)[0][i]}">${Object.values(data)[0][i]}</option>
                `
            }
        }
        
    })
    
    
        // res.find(element => {
            // subCategorybox.innerHTML += `
            // <option value="${Object.keys(element)}">${Object.keys(element)}</option>
            // `
        // })
       
        
}

categorySelectBox.onchange = subcategoryLoad;


const loadFile = () => {
    console.log(imageInput.files[0])
    // const imgUrl = URL.createObjectURL(imageInput.files[0]);     
    // console.log(imgUrl);
    fileNameSpan.textContent = imageInput.files[0].name;
}
imageInput.onchange = loadFile;

categoryLoad();
// subcategoryLoad();
// test() => 전 페키지를 가져와서 콘솔에 찍어주는거, 패키지 추가하고 확인용도
// async function test() {
    
//     const test = await fetch("/api/packages", {
//         headers: {
//             Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//           },
//     })
//     const result = await test.json();
//     console.log(result);
// }
// test();