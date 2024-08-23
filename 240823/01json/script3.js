// 기존 callback 함수의 단점을 최소화하고자 나온 첫번째 대안 Promise

// Promise = 약속
// Callback 함수 중 가운데 어떤 요소라도 1개만 에러가 발생되는 경우. 연결 되어있는 다른 callback함수 실행에도 영향을 미친다.
//그런데 만약 callback 함수가 많이 연결 되어있는 경우에는 어떤 callback함수에서 에러가 발생되었는지 서칭 && 디버깅하기 매우 힘들다.

//생성자 함수 혹은 클래스를 통해서 탄생된 프로토타입. --> new예약어 사용


//////////////////////////producing code (제작코드 영역)
const likePizza = true;
const pizza = new Promise((resolve, reject)=>{
  //Promise는 하나의 콜백을 받는다. 꼭!! . 인자값도 약속한 두개의 값을 받는다. 실행함수와 에러났을 때 실행시킬 함수. 두가지를 받기로 약속되어있다. ==> 매개변수명은 고정되어있진 않지만 대부분 resolve와 reject로 사용한다.
  //resolve,reject는 함수이다. 
  if (likePizza) resolve("피자를 주문합니다.")
    else reject("피자 주문이 취소되었습니다.")

});

//////////////////////////consuming code (실행코드 영역)
pizza.then( (resulr) => console.log(resulr)).catch ( (err) => console.log(err)).finally(()=>console.log("완료"));
//메서드 체인.
// then 은 매서드 이다. resolve가 실행되면 resolve의 인자값을 받는 역할. _필수
// catch는 reject를 받아 reject를 실행 _필수
//finally 는 오류던 뭐든 끝나면 나오는 함수로 _비필수값이다.