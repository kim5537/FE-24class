const userName = document.querySelector("#name");
const userMajor = document.querySelector("#major");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value === "" || userMajor.value === "") {
    alert("정상적 데이터를 입력하세요");
  } else {
    const tbody = document.querySelector("tbody");
    const newTr = document.createElement("tr");
    //태그를 넣을 위치 선언과 새로운 tr생성 변수 선언

    const nameTd = document.createElement("td");
    nameTd.innerText = userName.value;
    userName.value = "";
    //이름td 선언하다 == 문서에. 만들다 td
    //이름td.안에텍스트 == 유저이름. 입력값
    //유저이름. 입력값 == "그릇생성"
    //===>유저td의 변수를 생성하고 그 값을 유저의 입력값과 연결시켜준다.

    const MajorTd = document.createElement("td");
    MajorTd.innerText = userMajor.value;
    userMajor.value = "";

    newTr.appendChild(nameTd);
    newTr.appendChild(MajorTd);
    tbody.appendChild(newTr);
  }
});
