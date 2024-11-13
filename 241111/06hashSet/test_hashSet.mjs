import { HashSet } from "./hashset.mjs";

let hashSet = new HashSet();

console.log(`==== is Empty =====`);
console.log(`is Empty : ${hashSet.isEmpty()}`);

console.log("==== 데이터 삽입 ====");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();
console.log(`is Empty : ${hashSet.isEmpty()}`);

console.log("==== 데이터 체크1 ====");
console.log(`isConute : ${hashSet.isContain(1)}`);

console.log("==== 데이터 1 제거 ====");
hashSet.remove(1);
hashSet.printAll();
console.log(`isConute : ${hashSet.isContain(1)}`);

console.log("==== clear =====");
hashSet.clear();
hashSet.printAll();
console.log(`isEmpty : ${hashSet.isEmpty()}`);
