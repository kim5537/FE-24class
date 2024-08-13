// 만약 교보의 fe이면 매일매일 신간 책 => 객체데이터로 만들어 b/e 서버에 데이터를 등록할 수 있도록 지원해주세요.

//300권이 있다고 하면

// const newBook1 = {
//   title: "당신이 누군가를 죽였다.",
//   author: "히가시노 게이고",
//   price: 17820,
//   category: "미스터리 스릴러",
// };

//1생성자 함수로 만들기
function Book(title, author, frice, category) {
  this.title = title;
  this.author = author;
  this.frice = frice;
  this.category = category;
}

//사용하기
const Book1 = new Book(
  "당신이 눈군가를 죽였다.",
  "히가시노 게이고",
  17820,
  "미스터리 스릴러"
);

// console.log(Book1);

// 2. class를 사용해 생성
