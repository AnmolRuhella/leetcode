
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });

  Promise.resolve().then(() => {
    console.log(i + 10);
  });
}


//output : 10 , 11, 12 , 0 , 1, 2 

//explain microtask > macrotask 
//promise is microtask and settimeout is macrotask 