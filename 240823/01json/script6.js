// const Xhr = new XMLHttpRequest();
// Xhr.open("GET","student-2.json");
// Xhr.send();

// const renderHTML = (students)=>{
//   let output = "";

//   for(let student of students) {
//     //json의 각 아이템들을 output에 넣는 반복문 ==> json은 다수의 값을 []로 감싸는데 이는 배열의 형태이다. 
//     output += `
//     <h2>${student.name}</h2>
//     <ul>
//       <li>전공 : ${student.major}</li>
//       <li>학년 : ${student.grade}</li>
//     </ul>
//     `
//   }
//   //반복을 끝내고 json 값이 output에 다 들어간후
//   document.querySelector("#result").innerHTML = output;
// }


// Xhr.onreadystatechange = () =>{
//   if (Xhr.readyState === 4 && Xhr.status === 200 ) {
//     const students = JSON.parse(Xhr.responseText);
//     renderHTML(students);
//   }
// }

////////////fetch 함수 //////////////////
// fetch("student-2.json"); 
//이 구문은 아래 내용을 대신한다.
// const Xhr = new XMLHttpRequest();
// Xhr.open("GET","student-2.json");
// Xhr.send(); 

////fetch타입은.?
// console.log(fetch("student-2.json"))
//[Prototype]]: Promise 
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: Response
//fetch는 promise 이기 때문에 then을 사용한다. 
//Response는 가져온 값이다.

fetch("student-2.json").then(response => response.json()).then(json=> {
  //json() = 파싱한 결과와 함께 이행하는 프로미스를 반환합니다.  JSON이 아니라 JSON을 입력으로 받아 파싱하여 JavaSript 객체를 생성한 결과라는 점에 유의
  let output = "";
  json.forEach(student => {
    output += `
    <h2>${student.name}</h2>
    <ul>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
    </ul>
    `
  });
  document.querySelector("#result").innerHTML = output;
}).catch(err => console.log(err));
