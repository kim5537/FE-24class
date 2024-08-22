const xhr = new XMLHttpRequest();

XPathResult.open("GET", "student.json");
//true. 기본설정으로 비동기적 방식
// false는 동기적 방식이다.
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerHTML = `
    <h1>${student.name}</h1>
    <ul>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade} </li>
    </ul>;`;
  }
};
