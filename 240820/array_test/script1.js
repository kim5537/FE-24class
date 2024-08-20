// id 123 =name 곰
// id 1021 = name 사자
//id 6021 = name 여우

//자료구조를 뭐로 할가 먼저 생각해야한다. 

const id = document.querySelector("#id")
const name = document.querySelector("#name")


// const user = {
//   123: "곰",
//   1021: "사자",
//   6021: "여우",
// }

// id.addEventListener("keyup",()=>{
  
// })

const user = new Map()
user.set("123","곰").set("1021","사자").set("6021","여우")
