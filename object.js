let name1={
    firstName:"Akhila",
    lastName:"Komire",
}
let printFullName=function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state)
}
//printFullName.call(name1,"HYD","TG")
let name2={
    firstName:"A",
    lastName:"K",
}
//printFullName.call(name2,"RDG","TG")
//apply
printFullName.apply(name1,["HYD","TG"])
//bind
let printName=printFullName.bind(name2,"RDG","TG")
console.log(printName);
printName();

var student={age:20}
function add(){
   return this.age
}
var bound=add.bind(student)
console.log(bound())
bound();

let multiply=function(x,y){
    console.log(x*y)
}

let multipleByTwo=multiply.bind(this,2)
multipleByTwo(3);

