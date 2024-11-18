let arr = [3, 5, 2, 4, 1, 7, 8, 6];

// leftIndex = 해당 배열에 가장 좌측 인덱스값
// middleIndex = 해당 배열의 가운데 인데스 값.
// rightIndex = 해당 배열에 가장 우측 인덱스값

const merge = (arr, leftIndex, midIndex, rightIndex) => {
  let leftArrIndex = leftIndex;
  let rightArrIndex = midIndex + 1;

  let tempArr = [];

  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;

  while (leftArrIndex <= midIndex && rightArrIndex <= rightIndex) {
    if (arr[leftArrIndex] <= arr[rightArrIndex]) {
      tempArr[tempArrIndex] = arr[leftArrIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightArrIndex++];
    }
    tempArrIndex++;
  }

  if (leftArrIndex > midIndex) {
    for (let i = rightArrIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex] = arr[i];
    }
  } else {
    for (let i = leftArrIndex; i <= midIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }

  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
};

const mergeSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    // 재귀함수를 사용해 배열을 나눔
    mergeSort(arr, leftIndex, midIndex);
    mergeSort(arr, midIndex + 1, rightIndex);
    merge(arr, leftIndex, midIndex, rightIndex);
  }
};

console.log("===정렬 전 ===");
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log("===정렬 후 ===");
console.log(arr);

//제일 효율이 좋음
