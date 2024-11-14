let arr = [4, 2, 3, 1];

const bubbleSort = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("===== 외부 for문 =====");
    console.log("arr[i]", arr[i]);
    console.log("===== 내부 for문 =====");
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log("arr[j]", arr[j], "와", arr[j + 1], "비교");
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("arr[앞]", arr[j], "arr[뒤]", arr[j + 1]);
      }
    }
  }
};

console.log("===== 배열 정렬 전 =====");
console.log(arr);

bubbleSort(arr);

console.log("===== 배열 정렬 후 =====");
console.log(arr);
