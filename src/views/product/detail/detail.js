const tripStart = document.getElementById("tripStart");

// 여행 출발일 input값 현재 날짜로 고정
function date() {
  let date = new Date();
  let month = "";
  if (date.getMonth() + 1 < 10) {
    month = `0${date.getMonth() + 1}`;
  } else {
    month = date.getMonth();
  }

  return `${date.getFullYear()}-${month}-${date.getDate()}`;
}

tripStart.value = date();
