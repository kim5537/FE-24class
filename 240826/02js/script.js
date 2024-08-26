const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

// const addTodo = () => {};

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("ok");
// });

//(5)
const getLocal = () => {
  //DOMContentLoaded가 핸들러이다. 문서를 다 읽으면 실행
  //1
  let todosContainer; // 배열의 형태로 값을 넣을 그릇
  //2
  if (localStorage.getItem("todos") === null)
    todosContainer = []; // 배열의 형태로 넣는다.
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

  // localStorage.setItem("todos", JSON.stringify(todos));

  //(3번 함수)
  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.classList.add("todo");

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todo;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);
    todos.appendChild(newLi);
    todoItem.value = "";
  });
};

//(4번)
document.addEventListener("DOMContentLoaded", getLocal);

//(2번 함수)
const saveLocal = (todo) => {
  //1
  let todos; // 배열의 형태로 값을 넣을 그릇
  //2
  if (localStorage.getItem("todos") === null)
    todos = []; // 배열의 형태로 넣는다.
  else todos = JSON.parse(localStorage.getItem("todos"));

  //3
  todos.push(todo); //==> 베열로 만들었기 때문에 푸쉬
  //1
  localStorage.setItem("todos", JSON.stringify(todos));

  //(3번 함수)
  // todos.forEach((todo) => {
  //   const newLi = document.createElement("li");
  //   newLi.classList.add("todo");

  //   const newSpan = document.createElement("span");
  //   newSpan.className = "todoContent";
  //   newSpan.innerText = todo;

  //   const completeBtn = document.createElement("button");
  //   completeBtn.className = "completeBtn";
  //   completeBtn.innerText = "완료";

  //   const deleteBtn = document.createElement("button");
  //   deleteBtn.className = "deleteBtn";
  //   deleteBtn.innerText = "삭제";

  //   newLi.append(newSpan, completeBtn, deleteBtn);
  //   saveLocal(todoItem.value);
  //   todos.appendChild(newLi);
  //   todoItem.value = "";
  // });
};

//(1번 함수)1번 방법 -- 정석
// const addTodo = (e) => {
//   e.preventDefault();
//   console.log("ok");
// };

// form.addEventListener("submit", (e) => {
//   addTodo(e);
// });

//(1번 함수) 2번 방법 -- 약식 (축약형)

const addTodo = (e) => {
  e.preventDefault();

  if (todoItem.value !== "") {
    const newLi = document.createElement("li"); //2
    // newLi.className = "todo"; //3
    newLi.classList.add("todo"); //3 -> 둘다가능
    //4
    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todoItem.value;

    //5
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "완료";
    completeBtn.className = "completeBtn";

    //6
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "deleteBtn";

    // newLi.appendChild(newSpan); //4
    // newLi.appendChild(completeBtn); //5 ==> 4번 뒤에 취가해야 4번밑에 들어감
    // newLi.appendChild(deleteBtn); //6

    //축약//
    newLi.append(newSpan, completeBtn, deleteBtn);
    saveLocal(todoItem.value); // c최종 - > 로컬스토리지에 넣는 함수
    todos.appendChild(newLi); //2
    todoItem.value = ""; // 마지막 - > 값 넣기 완료했다면 inputtext내용 삭제
  }
};

//7번함수
const removeLocal = (todo) => {
  let todosItem;
  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexOf(todo.children[0].innerText);
  // console.log(index);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
};

//(6번 함수)
const managaTodo = (e) => {
  //이벤트가 일어났을때 받는 함수여서 이벤트 참조변수 가능ㄹ
  //돔을 활용해서 하고 싶었다. 독특한 방법
  //console.log(e); ==> 타켓 확인하면 클래스가 뜬다.
  // console.log(e.target.classList[0]);
  const wichButton = e.target.classList[0];
  if (wichButton === "completeBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (wichButton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem); //7번함수
    todoItem.remove();
  }
};

//(6)
todos.addEventListener("click", managaTodo);
form.addEventListener("submit", addTodo);
//참조변수를 주지 않아도 자동으로 참조변수가 넘어간다.
