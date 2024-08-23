// const displayA = ()=> {
//   console.log("A")
// }
// const displayB = ()=> {
//   console.log("B")
// }
// const displayC = ()=> {
//   console.log("C")
// }
// displayA();
// displayB();
// displayC();

// 멀티 스레드 처럼 비동기방식처럼 보이게 해보자. 

// const displayA = ()=> {
//   console.log("A")
// }
// const displayB = ()=> {
//   setTimeout(()=> console.log("B"),2000)
// }
// const displayC = ()=> {
//   console.log("C")
// }
// displayA();
// displayB();
// displayC();
// 만약 b가 오래 걸릴거 같다. 그럼 ac를 먼저 출력시키자. ==> 싱글스레드라면 코드 순서대로 abc가 나와야하는데 acb를 출력함. 

const displayA = ()=> {
  console.log("A")
}
const displayB = ( callback)=> {
  setTimeout(()=>{
    callback()
    console.log("B")
  },2000)
  //콜스택(나중에 들어온것이 먼저 나감) 
}
const displayC = ()=> {
  console.log("C")
}
displayA();
displayB(displayC);
//b에게 c를 콜백으로 넣는다. 비동기처럼 보임
//b 가 콜백으로 c를 받음 ==> acb 출력