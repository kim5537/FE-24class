//1.사용자로부터 input 태그를 통해 입력값을 받는다.
//2입력값이 확인 되면 ul태그 자식요소로 하나씩 추가한다.
//3.ul태그 자식요소 중 삭제 버튼을 클릭했을 때 , 버튼을 포함하고 있는 부모요소를 확인 후 같이 삭제해준다
//-------------------------------------
//4.사용자가 입력한 값이 영구적으로 보관될 수 있도록 로컬스토리지(localstorage)를 활용해서 값을 저장시킨다.
//5사용자가 값을 입력하면 다이렉트로 ui화면에 출력 되는 것이 아닌 이제부터는 localstorage 안에 저장된 값을 찾아와서 ui화면에 출력시키도록 한다.
//6 삭제버튼을 클릭한다면 직접적으로 ui 화면 내 값을 삭제해주는 것이 아니라, localstorage 값을 먼저 삭제 후 삭제가 업데이트 된 값을 ui 화면에 출력 시켜준다.

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem(`todos`, JSON.stringify(todos));
  //localStorage.setItem(`todos`, JSON.stringify(todos));
  //읽지를 못해서 오브젝트로만 뜨기때문에 알수있는 형태인 제이슨으로 변경
  //제이슨은 문자형으로만 가능하기 때무넹 stringify()로 문자형으로 변경
};

const delITem = (e) => {
  const target = e.target.parentElement;
  //그냥 remove를 사용하면 해당 객체가 사라진다.
  //버튼을 눌렀을 때 버튼이 사라지는게 아닌 부모인 li를 삭제해야한다.
  //현재 눌러진 것을 알기위해 target이나 currenttatget을 사용할 수 있다. 여기서는 둘 다 같은 것이기 때문에 뭘 사용하든 상관없다. 타겟을 사용하기 위해 이벤트 객체를 줘야한다.
  //부모를 찾기위해 parentElement 사용
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
  //배열안에 특정 아이템을 찾아와 삭제할때 filter를 매우 많이!! 사용한다. 외우는 것도 좋다.
  //가운데 박힌 데이터도 삭제하기 위해서 filter을 사용하는 것.
  //해당아이다와 다른 아이디는 다시 저장 = 즉 재배열한다는 의미이다.
  //todo.id !== target.id 처럼 염격한 비교를 하면 삭제가 안되고 느스한 비교 (=)를하면 삭제된다. 이유는 뭘까.
  //형이 다르기 때문
  //최초에 id는 밀리초였고 이는 숫자이다. 로컬스토리지에 제이슨형태를 위해 문자로 전환했었다. 즉 숫자가 문자로형이 변환되어 저장된것.즉 둘은 숫자와 문자로 형이 다르기때문에 엄격한 비교로는 먹지 않는다.
  //형변환을 해주어 형을 맞추던지 느슨한 비교를 사용하여 삭제해야한다.
};

// const addItem = (text) => {
//   if (text !== "") {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     const button = document.createElement("button");

//     span.innerText = text;
//     button.innerText = `삭제`;
//     button.addEventListener("click", delITem);

//     li.appendChild(span);
//     li.appendChild(button);
//     ul.appendChild(li);
//   }
// };

///투두생성-- \ 매개변수 변경
const addItem = (todo) => {
  if (todo !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = `삭제`;
    button.addEventListener("click", delITem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    //저장된 값을 찾아와야 새로고침했을때 화면에서 안 사라진다.
    li.id = todo.id;
    //해당 아이디랑 매칭시켜 값을 삭제시키기위해 아이디를 만들어준다.
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    //해당값이 적였을때 시간을 아이디로 가진다.
    text: input.value,
  };
  //해당 객체를 todos에 업데이트시켜야한다.. push를 사용해서 넣는다.

  todos.push(todo);
  // addItem(input.value);
  //함수만 적는게 아닌 보낼 정보도 인자값으로 꼭 적자.
  addItem(todo);
  //이젠 인자값을 투두로. 인자값이 문서형태가 아닌 함수를 넣는다
  save();

  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem(`todos`));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    //아무것도 없을때는 돌지 않기위해 조건을 넣어준다.
    todos = userTodos;
  }
  //파싱의 파스이다. 값을 가지고 온다는 뜻
};

init();
form.addEventListener("submit", handler);

//로컬스토리지 : 공간이 매우 적다.  cntl + shift + j에 application 탭에 localstotage에서 확인 가능 // json의 형태과 똑같이 생겻기 때문에 코테에 많이 사용한다.
// 로컬스토리지(point) =  삭제가 되지 않는다면 반영구적 //무한정

//세션스토리지 : 우리가 웹페이지를 보면 해당 정보를 임시적으로 저장하는 공간. cntl + shift + j에 application 탭에 session stotage
///세션스토리지 (point) =임시 // 웹브라우저가 작동중//컴퓨터가 작동하는 중 ==> 해당조건에 가동된다.

//cntl + shift + j에 application 탭
//cookies == 웹이 넣어준다. 접속한 것을 알려준것 ==  로그인 정보가 저장되어 그 쿠키값이 가지고 있다. 이를 웹에 보내서 해당 회사에서 확인. 때문에 보안이 약한 사이트는 이 쿠키값을 가지고 회원의 정보를 해킹하기도 한다.

//========================================================
//1. 로컬스토리지에 데이터를 저장하는 방법
//윈도우의 내장객체인 localstorage를 사용
// localStorage.setItem("hello", "world");
//키와 밸류는 문자형태를 하고 있다.
//중요한건 벨류 값이다.
// const myDate = localStorage.getItem("hello");
// console.log(myDate);
//콘솔에 world가 나온다.
//저장한 값을 저장할 방법을 꼭 고민하자. 우리는 그래서 자료구조를 공부했다.
//배열이 왕이다. 순번을 정하기 때문에 저장 삭제가 쉽다.

//로컬스토리지 데이터를 가져오는 방법

//로컬스토리지 데이터를 삭제하는 방법
