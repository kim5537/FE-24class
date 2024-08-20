// d아이디를 입력하면 결과값을 찾아온다 
const userID = document.querySelector("#Id")
const result =document.querySelector("#result")
const userDataList = [
  {id:123,name:"곰"},
  {id:1021,name:"사자"},
  {id:6021,name:"여우"},
]
//객체에 배열을 저장?

const findUser= (searchId)=> {
const targetDate = userDataList.find((deta)=> deta.id ===searchId);
// console.log(targetDate)

if(targetDate === undefined || targetDate === null) {
  result.innerText = "유저 검색결과 없음";
}


result.innerText = targetDate.name;
//특정요소를 찾아 새로운 배열로 가져온다.
//userDataList 배열이고 파인드는 해당요소에 일치하느 값을 찾아서 targetDate에 넣는다.
}


userID.addEventListener("keyup",(e)=>{
// console.log(e.target.value)
const searchId = parseInt(e.target.value);
//e값이 string인 문자이다 그래서 숫자로 형변환을 해야한다.

// if(isNaN(searchId)) result.innerText = "숫자가 아닙니다.";
//result.innerText = "유저 검색결과 없음"; 이게 더 상위요소로 취급된다.

findUser(searchId);
})



//어디서 부터 이벤트가 시작될 것 인가.
//이벤트가 시작된 이후에 어떤 값을 생성하고 처리할 것인가.
//어떻게 자료 구조를 만들고 갈 것인가.

//이후부터 문법이 필요하다.