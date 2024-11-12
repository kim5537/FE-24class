const arr = [87, 70, 100];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}

average /= arr.length;

// acerage와 같은 결과를 내는 함수를 만든 것이다.
//단 만약 자료가 추가된다면  average는 수정이 필요하나 해당 2코드는 전체 수정이 필요없다.

//알고리즘 관점으로 보면 2 파일은 반목문이라는 방법을 사용한 것 즉 반복문이라는 해결법을 사용한 것
