//fibonacci
//1, 1, 2 ,3 ,5 를 정렬해보자.
const fibonacci = (n) => {
  if (n === 0 || n === 1) return n; // 0과 1일땐 불가.
  return fibonacci(n - 2) + fibonacci(n - 1);
};

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;
  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
};

let start = new Date();
console.log(fibonacci(10));
let end = new Date();
console.log(`피보나치 실행시간 : ${end - start}`);

start = new Date();
console.log(fibonacci(10, []));
end = new Date();
console.log(`메모이제이션 피보나치 실행시간 : ${end - start}`);
