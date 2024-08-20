const userDataList = [
  {name: "곰" , age:18},
  {name: "여우" , age:27},
  {name: "사자" , age:32},
  {name: "얼룩말" , age:41},
  {name: "기린" , age:56},
];

const buttons = document.querySelectorAll(".button")

// console.log(buttons)
//NodeList이고 배열이 아니다. 유사배열 ==>반복순회문에 작동되지 않는다.


const updateList = (filteredList) =>{
  let listHtml = "";
  filteredList.forEach((data)=>{
    listHtml += `<li> ${data.name} : ${data.age} </li>`
  })
  console.log(listHtml)
  document.querySelector(".user_list").innerHTML = listHtml;
}

const onClickButton = (e)=>{
  const targetAge = e.target.dataset.age;
 //.target.dataset는 데이터 값을 들고 온 것. age는 우리가 부여한 속성이다.
  const filteredList = userDataList.filter((data)=> data.age >= targetAge);
  updateList(filteredList);
 //배열에 대부분의 메서드 함수는 콜백을 사용한다.
};


buttons.forEach((button)=>{
  button.addEventListener("click",(e) => {
    onClickButton(e)
    //우리가 html에서 준 detaset을 사용할것
  });
});