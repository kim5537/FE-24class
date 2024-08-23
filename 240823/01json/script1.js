// 콜백함수를 만들어 보자.
//커피주문 접수 받는 함수를 만들어 보자.
const display = (result) => {
console.log(`${result} 준비 완료`)
}

const order = (coffee , callback) => {
console.log(`${coffee}주문 접수!`)
setTimeout(()=>{
  callback(coffee)
},3000)
}

order("아메리카노", display);
//오더안에 콜백으로 디스플레이 함수가 들어있음
//마치 비동기처럼 