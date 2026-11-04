const obj = {
  section : "A",
  user: {
    name: "React"
  }
};

const copy = { ...obj };

copy.user.name = "Angular";
copy.section = "B"

console.log(obj.user.name);
console.log(obj.section)

//output : Angular , A 

//nested property change ki ha isliye change ho jaayegi Original object me q ki shallow copy ha 
