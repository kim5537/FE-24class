let arr = [4, 1, 5, 3, 6, 2];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    console.log("정렬시작", `i = ${i}`, "비교숫자=", arr[i], arr);
    let insertingData = arr[i];
    console.log("insertingData=", insertingData);
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insertingData) {
        arr[j + 1] = arr[j];
        console.log("j가 크넹");
      } else {
        break;
      }
    }
    arr[j + 1] = insertingData;
    console.log("j가 작네");
    console.log("insertingData=", insertingData, "arr=", arr);
  }
};

console.log("==== 정렬 전 ====");
console.log(arr);

insertionSort(arr);

console.log("==== 정렬 후 ====");
console.log(arr);

// 에러있음
