//사용자에게 이름 키 몸무개 3개를 받는다
//사용자의 몸무개가 적정 체중인가 확인
//적정체중 = (본인키 -100)*0.9 -->오차범위 5

const name = prompt("이름을 적어주세요", "ex.곽두팔");
const height = parseFloat(prompt("키는 얼마나 큰가요?", "ex.178"));
const weight = parseFloat(prompt("몸무게를 적어주세요", "ex.74.7"));

const normalWeight = (height - 100) * 0.9;
let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

//조건식을 굉장히 쉽고 간편하게 사용할 수 있는 3항 조건 연산자.==>if문을 거의 안 쓰게 된다.

result = result ? "적정 체중입니다!" : "적정 체중이 아닙니다";

alert(`${name}님은 ${result}`);

//&&엔드 연산자 앞과 뒤 둘다 참일때 연산함
