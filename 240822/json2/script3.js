// // console.log("시작");
// // add();
// // console.log("실행중");

// try {
//   //실행시킬 코드
//   console.log("시작");
//   add();
//   console.log("실행중");
//   console.log("끝");
// } catch (err) {
//   //반드시 있어야한다
//   //직관적으로  err를 사용한다.
//   //try문을 실행했을 떄 에러사항이 발생될 경우 실행시킬 명령문
//   console.log(`오류발생 : ${err.message}`);
//   //catch는 name 과 message  두가지 값을 가진다.

//   //에러를 정의할 수 있다.

// }
// console.log("종류");

const json = `{"grade":3, "age":25}`


try {
  const user = JSON.parse(json);
  if (!user.skill) throw "사용자 스킬이 없다";
} catch (err) {
  console.log(err);
}
