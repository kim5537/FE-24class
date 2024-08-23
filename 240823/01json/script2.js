//콜백 지옥
const displayLetter = ( )=>{
  console.log("A");
  setTimeout(()=>{
console.log("B")
setTimeout(()=>{
  console.log("C")
  setTimeout(()=>{
console.log("D")
setTimeout(()=>{
  console.log("stop!")
})
  },1000)
})
  },1000)
}
displayLetter();
//한번 문제가 생기면 도미노처럼 다 에러가 생긴다. 그래서 필요한 경우만 사용하자. 
// 이걸 대처하기 위해 promise가 나왔다.