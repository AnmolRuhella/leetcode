const obj = {
  name: "React",

  regular() {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  }
};

obj.regular();
obj.arrow();


//output : React , undefined 
//because arrow fuction has not this and it will point to parent 's this 