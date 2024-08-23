// const step1 = (callback) => {
//   setTimeout(()=>{
//     console.log("피자 도우 준비")
//     callback();
//   },2000);
// };

// const step2 = (callback)=> {
//   setTimeout(()=>{
//     console.log("토핑완료");
//     callback();
//   },2000)
// };

// const step3 = (callback)=> {
//   setTimeout(()=>{
//     console.log("굽기완료");
//     callback();
//   },2000)
// };

// console.log("피자를 주문합니다.")


// step1(()=>{
//   step2(()=>{
//     step3(()=>{
//       console.log("피자가 주문 되었습니다.")
//     })
//   })
// });

//프로미스로 변경

// const pizza = new Promise; // 이것도 가능 ==> 프로토타입 함수이기때문에 리턴문 반한값으로 사용가능

const pizza =()=>{
  return new Promise((resolve, reject)=>{
    //리턴문으로 then에  값을넣어줌
    resolve("피자를 주문합니다!")
    //then이기 때문에 resolve값을 받을 수 있다.
    //(1-1)
    resolve("피자를 주문합니다.")
  })
}

//(1-1)
// console.log(pizza())
//Promise {<fulfilled>: '피자를 주문합니다!'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "피자를 주문합니다!"


const step1 = (message) => {
  console.log(message)
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve("피자 도우 준비")
    },3000)
  })
}

const step2 = (message)=>{
  console.log(message)
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve("토핑 완료")
    },3000)
  })
}

const step3 = (message)=>{
  console.log(message)
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve("굽기완료")
    },3000)
  })
}

// pizza()
//   .then((result)=> step1(result))
//   .then(result => step2(result))
//   .then(result => step3(result))
//   .then(result => console.log(result))
//   .then(()=> console.log("피자가 준비 되었습니다."))

//실행코드를 줄이기. 위랑 같은 의미이다.
pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(()=> console.log("피자가 준비 되었습니다."))
  //어차피 인자값을 받아 다음에 전달하는건 똑같기 때문에 축약 할 수 있다.
