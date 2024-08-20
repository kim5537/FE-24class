// let bag = new Map();
// //맵의 인스턴스 객체 생성.
// bag.set("color", "red");
// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["meterial", "ceramic"],
  ["capacity", "300ml"],
]);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");
// console.log(myCup);

//메서드 체이닝 --> 특정객체뒤에 사용 가능한 메서드가 있다면 그걸 사용후 다른 함수를쓴다.
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);
//이런걸 말한다.

console.log(myCup.get("color"));
// console.log(myCup.delete("type"));
// console.log(myCup);
// console.log(myCup.clear());
// console.log(myCup);

console.log(myCup.keys());
console.log(myCup.values());
console.log(myCup.entries());

for (let key of myCup.keys()) {
  console.log(key);
}
for (let key of myCup.values()) {
  console.log(key);
}
for (let key of myCup.entries()) {
  console.log(key);
}
