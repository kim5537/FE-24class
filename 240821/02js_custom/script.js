//프레임
const frame = document.querySelector("section");
//8개 요소
const lists = document.querySelectorAll("article");


//각도
const deg = 45;
//1번의 증가 값을 넣을 그릇 ==> 다른 곳에서도 쓸 예정
let i =0;

// 1) 8개 요소의 회전
lists.forEach((list)=>{
  //(1-2)
   //article 안에 img
  //article을 하나식 반복적으로 돌리니까 전역이아닌 지역으로 할당/
  const pic = list.querySelector(".pic")

  //(1-1)
  list.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`
  //트렌스폼은 순서가 중요하다.
  //부모요소 섹션안에 8개 요소가 앱솔로 모여있고 점차 45도로 기울어져있어야한다.= 45도 곱하기 배수가 되어야한다 = 요소의 인덱스값을 찾아오면 된다. 
  //외부로 나가는건 -값을 가진다. 그래서 -을 주는 것.
  //(1-2)
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`


  //(1-1) 증감도 필요하다.
  i++
  //펄쳐진 요소들을 만들고 움직이기 위해 scss로 움직임을 주기로 넘어감
  
})
