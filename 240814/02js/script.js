function Book(title, pages, done = false) {
  //field 라고 부름
  this.title = title;
  this.pages = pages;
  this.done = done;

  //method 라고 부름
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);
console.log(book1);

// class로 만들기

//반드시 metthod함수박에 들어갈 수 업슴 ==>필드값은 constructor에 들어간다.
class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done = false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}

//ts 슈퍼셋 언어라고도 한다. (접근제어자, 추상화)
//public,private,protected등등이 있다.
