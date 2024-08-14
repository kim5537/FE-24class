// const Book = function (title, pages, done) {
//   this.title = title;
//   this.poges = pages;
//   this.done = done;

//   this,
//     (finish = function () {
//       let str = "";
//       this.done = false ? (str = "읽는중") : (str = "완독");
//       return str;
//     });
// };

// const book1 = new Book("자바스크립트", 648, false);

// console.log(book1.__proto__);

// /__proto__ 인스턴스 객체의 프로토타입을 확인 하는 속성
//function book() {} <<이거도 같은 의미

// console.log(Book.prototype);
//인스턴스 객체의 조상이 되는 프로토타입 객채를 생성해준 생성자 함수가 가지고 있는 속성 및 메서드 함수를 확인

//에러가 프로토타입을 확인 함
//모든건 결국 오브젝트가 뜬다

//상속에 대한 개념을 설명하기 전에 인스턴스 객체의 기원을 찾는 방법. __proto__
//해당 기원의 속성을 확인 하는 방법 prototype

//객체를 선언 후 키에 접근. : 온점. 대괄호
//거꾸로 올라가서 최초로 선언했던 기능을 추가할수있다.

// function Newbook(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }

// Newbook.prototype.finish = function () {
//   let str = "";
//   this.done === false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };

// const nbook1 = new Newbook("타입스크립트", 675, false);
// console.log(nbook1.finish());

//상속을 받아보자.

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다`);
};

const book1 = new Book("뽀로로", 10000);

book1.buy();

/// 기존 생성자 함수를 업그레이드 해서 쓰고 싶다!!
//기존거에 메이저만 추가
function TextBook(title, price, major) {
  Book.call(this, title, price);
  //Book의 this도 찾아와야 메이저고 알아듣는다.
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major}전공서적, ${this.title}을 구매하였습니다.`);
};
//반드시 도킹작업을 해야한다. =Object.setPrototypeOf

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("잘될거야", 20000, "인생");
book2.buyTextBook();
book2.buy();
