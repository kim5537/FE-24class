// 타입만 다른 형태가 똑같은 class를 합쳐서 사용하기 = 타입 변수

class NumberList {
  //접근제어자 사용
  constructor(public list: number[]) {}
  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

class StringList {
  //접근제어자 사용
  constructor(public list: string[]) {}
  push(data: string) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}
const numberList = new NumberList([1, 2, 3]);

class List<T> {
  //타입 변수로 합치기
  constructor(public list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const list = new List([1, "2", "3"]);
console.log(list);
