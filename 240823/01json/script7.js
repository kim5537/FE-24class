// //일반함수
// const displayHello = ()=>{
//   console.log("Hello")
// }

// displayHello()



// const displayHello = async ()=>{
//   console.log("Hello")
// }

// console.log(displayHello())
//다른 점은 
//Promise {<fulfilled>: undefined} ==> 이 함수는 프로미스이다. = then을 사용할 수 있다.

//프로미스 사용
// const whatsYourFavorite = ()=>{
//   const fav = "Javascript";
//   return new Promise((resolve,reject)=>resolve(fav));
// };
// const displaySubject= (subject)=>{
//   return new Promise((resolve,reject)=>resolve(`Hello ${subject}`));
// };

// whatsYourFavorite().then(displaySubject).then(console.log);


///async await 사용하기

//async ==> 함수의 형태 ==> 비동기처리를 시킨다.
//await ==> 예약어 (*특정 요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어)
//await 예약어는 혼자 사용할수 없고 async 함수내에서 사용가능하다.

const whatsYourFavorite = async () => {
  //이미 promise이기 때문에 promise는 축약한다.
  const fav = "javascript";
  return fav;
};

const displaySubject = async (subject)=>{
  return `Hello, ${subject}`
}

// whatsYourFavorite().then(displaySubject).then(console.log);

const init = async () => {
  //비동기라 순서를 지키지 않음. 그래서 동시에 출력.
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result)
  //콘솔에 Promise {<fulfilled>: 'Hello, [object Promise]'}
  //whatsYourFavorite의 javascript라는 값을 받지 못함.
  //그래서 await가 필요한데 await는 async없이는 못 쓴다.
  //따라서 async를 넣어야한다.
}
init();

// const init = async () => {
//   const response = await whatsYourFavorite();
//   const result = await displaySubject(response);
//   console.log(result)
// }
// init();