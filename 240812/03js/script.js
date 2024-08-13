//전체 몇명중에 입력된 인원의 수만큼 랜덤 뽑기를 한다 ->단 반복값이 들어오면 안된다.
//1. 인풋태그를 전부 불러온다..
//2. 2번째 인풋값을 받아와 해당 수 만큼 랜덤수를 뽑는다.-->이때 필요한 조건문은 if.그리고 핸들러로 상단에 addEvent로 submit을 사용하자.
//3. 반복된 숫자를 빼야한다. 이때 사용할 문구는 else if

// const all = document.querySelector("#number");
// const select = document.querySelector("#number02");
// const form = document.querySelector("form");
// const result = document.querySelector("#result");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const allPeaple = Number(all.value);
//   const selectPeaple = Math.floor(Math.random() * allPeaple) + 1;
//   console.log(selectPeaple);
// });

///////해답////

//반복해야해서 반복문이 필요하다!!! 이걸 놓쳤다.

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const Number01 = document.querySelector("#number");
  const Number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  //값을 생성
  let winner = "";
  let pickedNumbers = [];

  for (let i = 0; i < Number02.value; i++) {
    let picked;

    //set을 사용하지 않고 다른 걸로 해보자.
    do {
      picked = Math.floor(Math.random() * Number01.value + 1);
    } while (pickedNumbers.includes(picked));
    //무조건 실행한번하고 뒤 조건에 맞으면 다시 한번 반복한다.
    //include 해당요소가 들어있는지 유무에 따라 true와 fauls를 반환 --값이 있으면 트루가 나오면서 다시 반복.
    pickedNumbers.push(picked);
    winner += `${picked}번, `;
  }

  result.innerText = `당첨자 : ${winner} `;
});
