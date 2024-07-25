const products = {
  data: [
    {
      id: Date.now(),
      name: "Cup",
      price: 9900,
      //후에 장바구니 값 더하기 등등을 하기위해 문자로 만들지 않고 숫자로 (￦나 쉼표는 뺌)
      cartagory: "life",
      img: "./img/cup.jpg",
    },
    {
      id: Date.now() + 1,
      name: "Moust",
      price: 1500,
      cartagory: "IT",
      img: "./img/mouse.jpg",
    },
    {
      id: Date.now() + 2,
      name: "keyboard",
      price: 9900,
      cartagory: "IT",
      img: "./img/keyboard.jpg",
    },
    {
      id: Date.now() + 3,
      name: "book",
      price: 9900,
      cartagory: "book",
      img: "./img/book.jpg",
    },
    {
      id: Date.now() + 4,
      name: "Pen",
      price: 9900,
      cartagory: "book",
      img: "./img/pen.jpg",
    },
  ],
};

export default products;

//객체 배열 객제
