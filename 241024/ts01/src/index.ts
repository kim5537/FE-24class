// 일반 타입
const num: number = 1;

//리터럴 타입
const lit = 2; // 타입추론이 된다.
//그러나 직접 숫자를 주면! 리터럴  타입--!!! = 대수 타입 관계 설정할때
const lit2: 2 = 2;

//배열 타입
const numArr: number[] = [1, 2, 3];
const numArr1: Array<number> = [1, 2, 3];

// 튜플 타입
