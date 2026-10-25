const object = {
  key : "anmol",
  sayName (){
  console.log(this.key)
  }
}

const fn = object.sayName
fn()


//  Output would be : undefined
// because here fn = sayName()
// it is directly called sayName 
// but if we called object.sayName()
// output : anmol 

const object2 = {
  key : "anmol",
  sayName: ()=>{
  console.log(this.key)
  }
}

const fn2 = object.sayName
fn2()

// basically here i am also get undefined because arrow function hasn;t this so that why 
// its goes to outer where its created that is object2 and this of object2 === window 

// window.key === undefined 
