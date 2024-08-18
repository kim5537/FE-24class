// let pets = ["dog", "cat", "mouse"];
// pets[0] = "hamster";
// console.log(pets);

// //이터러블 객체
// // 배열 = > 이터러블 객체
// //배열 선언 = 갑 할당
// //1, 복수형으로 써주는게 좋다.
// const colors = ["red", "green", "blue", "white", "black"];

// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// // for(let color of colors) {

// // }

// // colors.forEach((color, index) => {
// //   console.log(`colors[${index}]: ${color}`);
// // });
// // //인덱스 값을 찾아올 수 있다.
// //두번째 인자값은 인덱스를 말한다.

// colors.forEach((color, index, array) => {
//   console.log(`${array}`);
//   console.log(`[${array}][${index}] : [${color}]`);
// });
// //3번째 란은 array를 말하는 것으로 문자열 전체를 말하는것으로 다 찾아온다.

// //구문법ㅇㅣ다.
// const vegitable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat, "빵");
// //vegitable이 메인이고 meat가 서브이다. 따라서 meat가 뒤에 붙는다
// //새로운 인자값도 바로 넣을수 있다.
// console.log(meatBurger);

// //전개연산자 - 신문법
// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);
// //콘캣과 비슷하다.

// // let numbers = [6, 9, 3, 21, 18];
// // console.log(numbers);
// // console.log(numbers.reverse());

// // let week = ["sunday", "monday", "tue"];
// // let values = [5, 20, 3, 11, 4, 15];

// // console.log(week);
// // console.log(week.sort());
// // //낮은거 부터 큰순서로 나열 = 오름차순

// // console.log(values);
// // console.log(values.sort());

// // //개발자가 정의 하고자 하는 함수를 콜백으로 반드시 입력해주어야 한다.

// // values.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// //   if (a === 0) return 0;
// // });
// // console.log(values);

// // values.sort((a, b) => {
// //   return a - b;
// // });
// // //위 함수를 축약해서 쓴 값

// // console.log(values);

// // values.sort((a, b) => {
// //   return b - a;
// // });
// // //내림차순

// // console.log(values);

// // let animals = ["lion", "bear", "bird"];
// // console.log(animals);

// // animals.pop();
// // console.log(animals);
// // //뒤에서 부터 삭제

// // animals.push("tiger");
// // console.log(animals);
// // //뒤에서 부터 새로운 값을 넣어준다.

// // let fruits = ["apple", "pear", "banann"];

// // fruits.shift();
// // console.log(fruits);

// // fruits.unshift("cherry");
// // console.log(fruits);

// // let subjects = ["html", "css", "javascript", "react", "typescript"];
// // console.log(subjects.splice(2));
// let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(week.splice(1, 5));
// // console.log(week.splice(1, 5, "holiday"));
// console.log(week);
// //원본값을 날리기 떄문에 조심해야한다.

// // let color = ["red", "green", "blue", "white", "black"];
// // console.log(color.slice(2));
// // console.log(color.slice(1, 4));
