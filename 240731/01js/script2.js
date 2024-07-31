//하단 id , pw는 a 사용자의 id & pw 이다
const id = "ezen";
const pw = 1234;

// 1. 사용자로부터 id 와 pw 정보값을 순차적으로 받는다.
//2. 사용자가 입력한 id값이 위에 저장된 값과 일치하면 pw 값을 받을 수 있는 단계로 넘어가고  id값이 일치하지 않으면 '정부 불일치' 알림창
//3. pw값을 입력하는 단계에 도착해서 역시 , pw가 일치하면 '사용자님 반갑습니다'라는 알림창이 나오고 , 만약 pw가 일치하지 않으면 pw 값이 일치하지 않는다는 알림창.

// const userid = prompt("아이디를 입력하세요");

// if (userid == id) {
//   const userpw = prompt("비밀번호를 입력해주세요");
// } else if (userid !== id) {
//   alert("정보 불일치");
// } else if (userpw == pw) {
//   alert(`${id}님 환영합니다`);
// } else if (userpw !== pw) {
//   alert("pw가 일치하지 않습니다");
// } else {
//   alert("회원을 찾을 수 없습니다.");
// }
// 1;
////// userpw가 지역변수라서 다른 if문에서 적용되지 않는다. 해석을 보면 중첩 if를 사용하였다.

///////해석

const userId = prompt("아이디 입력");

if (id === userId) {
  const userpw = Number(prompt("당신의 비번은"));
  if (pw === userpw) {
    alert(`${userId}님, 환영합니다`);
  } else {
    alert("비밀번호 불일치");
    window.location.reload();
  }
} else {
  alert("아이디 불일치");
  window.location.reload();
}
