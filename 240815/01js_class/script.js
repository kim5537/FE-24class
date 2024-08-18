//생성자함수
function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}를 ${this.price}원에 구매`);
};

const book1 = new Book("자바스크립트", 10000);
console.log(book1);
book1.buy();

function Textbook(title, price, major) {
  Book.call(this, title, price);
  //상속
  //this로 뭘 지칭하는지 알려줘야한다.
  this.major = major;
}

Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
};

//도킹 작업
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("타입스크립", 20000, "IT");
console.log(book2);
//prototype (조상)은 Book 이라고 뜬다.이유는 Textbook역시 Book의 상속을 받았기 때문이다.

book2.buyTextbook();
//IT 전공서적, 타입스크립을 구매했습니다 라고 뜸
book2.buy();
//타입스크립를 20000원에 구매 라고 뜸
//부모의 부모의 요소까지 사용가능하다는 걸 알 수 있다.

//extends : 꼭 사용할 필요는 없다. 그냥 상속만 받을 수 있다.
//타입스크립에서는  implement도 상속의 요소와 비슷하다. 특정 값을 상속을 받는다면 필수적으로 상속받은 값을 사용해야하는 전제 조건이 있다.

class BookC {
  //field
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  //method
  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book3 = new BookC("자료구조", 10000);
book3.buy();

class TextbookC extends BookC {
  // 북c를 텍스트북씨에 (확장하여) 넣는다. -- class 상속
  //this는 필요가 없다.
  constructor(title, price, major) {
    super(title, price);
    //call 대신 class에선 super를 사용한다.
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공서적 , ${this.title}을(를) 구매하였습니다.`);
  }
}

const book4 = new TextbookC("알고리즘", 5000, "IT");

book4.buyTextbook();
