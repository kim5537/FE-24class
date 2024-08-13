//객체 생성 =>선언한다.

// const book1 = {
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// console.log(book1);

// book1.master = "mim";

////////////////

// let book2 = new Object();
// console.log(book2);

// let book3 = new Array();
// console.log(typeof book3);

// book2.title = "타입스크립트";
// book2.author = "김지선";
// book2.bestSeller = "yes";

// delete book2.bestSeller;
///////////// 객체 중첩///////////////

const student = {
  name: "전진우",
  Age: 20,
  favorite: "게임",
  score: {
    history: 85,
    science: 90,
    average: function () {
      return (this.history + this.science) / 2;
    },
    like() {
      alert(`컴퓨터 좋아함`);
    },
  },
};
//갹체중첩을 사용하는 경우가 더 많다.
console.log(student.score.history);
console.log(student.score.average());
//못 찾는다.
//이유는 함수.
//화살표함수의 문제이다
//funtion 과 화살표
//화살표는 호이스팅이 안되기때문에 부모를 못 찾는다.
//화살표는 (student.score.history) 이렇게 다 적어줘야한다.

//average란 함수가 객체에서 태어났다. 객체지향함수라는게 이런 뜻.
//이런 averager같이 객체안에 프로퍼티의 일부로 탄생된 함수는 매서드 라고 칭한다.

student.score.like();
