import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("=-=== enqueue() ====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());
// 데이터가 1이 나옴
console.log("==== enqueue() =====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty : ${queue.isEmpty()}`);
