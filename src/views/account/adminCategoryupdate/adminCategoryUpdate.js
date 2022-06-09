const submitButton = document.querySelector("#submitButton");
const categorySelectBox = document.getElementById("categorySelectBox");
const mainInput = document.querySelector("#mainInput");
const subInput = document.querySelector("#subInput");
const mainInputlabel = document.querySelector("#mainInputlabel");
const subInputlabel = document.querySelector("#subInputlabel");
// TODO : 눌러서 카테고리를 추가, 수정, 삭제 할수 있게 한다.

// console.log(submitButton);
categorySelectBox.onchange = changeHTML;
// console.log(categorySelectBox.options[categorySelectBox.selectedIndex].value);

function changeHTML(){
    const actCategory = categorySelectBox.options[categorySelectBox.selectedIndex].value;
    
    if (actCategory == "카테고리 수정하기") { 
        mainInputlabel.textContent = "수정할 카테고리 명"
        subInputlabel.textContent = "수정될 카테고리 명"
        mainInputlabel.style.display = "block";
        mainInput.style.display = "block";
    }
    else if (actCategory == "카테고리 삭제하기") {
        subInputlabel.textContent = "삭제할 카테고리 명"
        mainInputlabel.style.display = "none";
        mainInput.style.display = "none";
    }
    else if (actCategory == "카테고리 추가하기") {
        mainInputlabel.textContent = "메인 카테고리"
        subInputlabel.textContent = "서브 카테고리"
        mainInputlabel.style.display = "block";
        mainInput.style.display = "block";
    }
}

async function actByCategory(actCategory, bodyData) {
    const data = JSON.stringify(bodyData);
    
    if (actCategory == "카테고리 추가하기") { 
        const res = await fetch("/api/subcategory", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: data,
        })
        // 추가한 커테고리 콘솔 창에 뛰워줌(카테고리 생성되었는지 확인할 수 있도록)
        console.log(await res.json())
    }
    else if (actCategory == "카테고리 수정하기") { 
        
        const res = await fetch(`/api/subcategory?curSubCategoryName=${bodyData.categoryName}&updatedSubCategoryName=${bodyData.subCategoryName}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: data,
        })
        console.log(await res.json())
    }
    else if (actCategory == "카테고리 삭제하기") {
        const res = await fetch("/api/subcategory", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: data,
        })
        console.log(await res.json())
     }
    
    
    const testCategory = await fetch("/api/category/list", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            
    })
    console.log(await testCategory.json())
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const actCategory = categorySelectBox.options[categorySelectBox.selectedIndex].value
    const bodyData = {
        categoryName: mainInput.value,
        subCategoryName:subInput.value,
    }
    actByCategory(actCategory,bodyData);
})