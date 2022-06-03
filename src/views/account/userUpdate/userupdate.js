// 토글 스위치를 누르면 해당하는 칸에 입력을 할수 있게 한다.
const fullNameToggle = document.querySelector("#fullNameToggle");
const passwordToggle = document.querySelector("#passwordToggle");
const addressToggle = document.querySelector("#addressToggle");
const phoneNumberToggle = document.querySelector("#phoneNumberToggle");
const telPhoneNumberToggle = document.querySelector("#telPhoneNumberToggle");

const nameInput = document.querySelector("#fullNameInput");
const passwordInput = document.querySelector("#passwordInput");
const passwordConfirmInput = document.querySelector("#passwordConfirmInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const telPhoneNumberInput = document.querySelector("#telPhoneNumberInput");

fullNameToggle.addEventListener("click",function(){changeDisabled(nameInput)})
passwordToggle.addEventListener("click",function(){
    changeDisabled(passwordInput);
    changeDisabled(passwordConfirmInput);
})

phoneNumberToggle.addEventListener("click",function(){changeDisabled(phoneNumberInput)})
telPhoneNumberToggle.addEventListener("click",function(){changeDisabled(telPhoneNumberInput)})
// changeDisabled(입력할수 있게 하고 싶은 태그)로 사용함.
// 사용하면 파라미터로 넣은 태그의 disabled속성이 true에서 false로 바뀌거나 반대로 된다.
function changeDisabled(tagElement) {
    console.log("change작동")
    if(tagElement.disabled == true){tagElement.disabled=false;}
    else if(tagElement.disabled==false){tagElement.disabled = true;}
  }

//-----------------------------------------------------------------------------//
const submitButton = document.querySelector("#saveButton");
submitButton.addEventListener("click",()=>{
    // DB에 저장하는 함수 사용해서 각 인풋 내용 DB로 전달 해서 업데이트 하는 내용.
    // 눌렀을때 현재 비밀번호를 입력하고 확인하는 모달 창을 뛰우는것은 시간날때
})

