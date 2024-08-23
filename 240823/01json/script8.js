//원래는 fetch("https://jsonplaceholder.typicode.com/users") 를 넣는데. 이번엔  fetch 도 비동기해야한다 (await) 왜냐면 다수의 데이터를 받기 때문

//2번
const display=(users)=>{
  const result = document.querySelector("#result")
  let output ="";
  users.forEach((user)=>{
    //배열 요소 수 만큼 반복하는 반복문.
    output += `
    <table>
      <tr>
        <th>이름</th>
        <td>${user.name}</td>
      </tr>
      <tr>
        <th>아이디</th>
        <td>${user.username}</td>
      </tr>
      <tr>
      <th>이메일</th>
      <td>${user.email}</td>
      </tr>
    </table>
    `
  })
  result.innerHTML = output;
}

const init = async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json();
  //복수의 객체를 배열형태로 감싸고 있는 데이터를 사용한다. 함수를 만들자 ==> 2번
  display(users);
}
//json 파일을 받는다면 JSON.parse지만 우리는 파일이 아니기 때무네 json() 함수를 쓴다.

init();