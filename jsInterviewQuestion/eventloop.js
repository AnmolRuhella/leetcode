console.log("1");

Promise.resolve()
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("3");
  });
  
async function test() {
  console.log("4");
  await null;
  console.log("5");
}
test();
console.log("6");
// OUTPUT: 1, 4, 6, 2, 5, 3
// 1. Synchronous execution
// console.log(1) → prints 1

// 2. Promise encountered
// First .then() callback is scheduled in the microtask queue.

// 3. Async function called
// console.log(4) → prints 4

// 4. Await encountered
// async function pauses.
// Code after await (console.log(5)) is scheduled as a microtask.

// 5. Synchronous execution continues
// console.log(6) → prints 6

// 6. Synchronous execution finishes.
// Now microtask queue starts executing.

// Initial microtask queue:
// [ First Promise .then() → 2, Await continuation → 5 ]

// 7. First Promise callback executes
// console.log(2) → prints 2
// After this, the second .then() callback is scheduled
// at the END of the microtask queue.

// Updated microtask queue:
// [ Await continuation → 5, Second Promise .then() → 3 ]

// 8. Await continuation executes
// console.log(5) → prints 5

// 9. Second Promise callback executes
// console.log(3) → prints 3

// FINAL FLOW:
// Synchronous → Microtasks (2 → 5 → 3)