import { HashTable } from "./hashTable.mjs";

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    //중복키를 받지 않기 때문에 data만 받는다
    if (this.hashTable.get(data) === null) {
      this.hashTable.set(data, -1);
      //키는 중볻되지 않기때문에 키가 필요없다. 그래서 키와 데이터를 받는 set에게 data대신 임의의 값아무거나 넣는다. 키 = data
    }
  }

  isContain(data) {
    return this.hashTable.get(data) !== null;
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }
    return empty;
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
