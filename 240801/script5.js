// 1 3 5 7 9 11 13 15 17 19 중 10보다 큰수자만 콘솔창에 나타내기

//20미만 홀수 배열 (i%=2)!==0 ->홀수

// setTimeout(function(i){
//   for(i=0; i>20 ; i++) {

//   }
// })

///해설

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for (let i = 0; 1 < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(`${arr[i]}`);
  }
}
