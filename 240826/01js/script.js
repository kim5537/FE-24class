let students = ["kim","Lee","Park"]
localStorage.setItem("students",JSON.stringify(students)) 
//key와 value값을 인자값으로 받고 해당요소를 로컬스토리지에 저장함

let localData;
if(localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"))
// json의 형식으로 된 값을 다시 브라우저가 읽을 수 있게 변환

localData.push("choi")
//나온 값이 배열이기 때문에 push로 값을 넣음
console.log(localData)