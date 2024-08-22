const xhr = new XMLHttpRequest();

xhr.open("Get", "student2.json");
xhr.send();

const renderHtml = (students) => {
  const result = document.querySelector("#result");
  // let output = "";
  for (let student of students) {
    // console.log(student);
    output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${major}</li> 
    <li> 학년 : ${grade}</li> 
    </ul>
    <hr/>
    `;
  }
  result.innerHTML = output;
};

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status === 200) {
    const stuent2 = JSON.parse(xhr.responseText);
    renderHtml(stuent2);
  }
};
