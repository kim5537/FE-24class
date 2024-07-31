const students = ["David", "Jullien", "Peter"];

// for문
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//숫자를 넣지말자. 후에 추가 될 수 있기 때문에 students.length를 넣는다

//for each
// students.forEach((student, index) => {
//   console.log(`${index + 1}번째 학생 : ${student}`);
// });

//students의 아이템값을 인자값으로 받아온다.
// 그냥 for과 다르게 index값 알아서 찾아온다.
//arr 배열 전체를 찾아오는 것

// for (let student of students) {
//   console.log(student);
// }
//이터너블한 함수안에서 하나 씩 찾아와줘

// const theBook = {
//   title: "JavaScript",
//   page: 250,
//   published: "2024-07-31",
// };

// for (let key in theBook) {
//   console.log(`${key} : ${theBook[key]}`);
// }

let stars = Number(prompt("별의 갯수 입력"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

do {
  document.write("*");
  stars--;
} while (stars > 0);
