function Developer (name){
  this.name = name;
  this.type = "Developer"  
}

function Tester (name){
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory(){
  this.create = function(name,type){
    switch(type){
      case 1: 
        return new Developer(name);
        break;
      case 2 : 
        return new Tester(name);
        break;
    }
  }
}


function sayName(){
  console.log(`Entry created for type : ${this.type} |  name  : ${this.name}`);
}

const employeeFactory = new EmployeeFactory();
const empArray = [];
empArray.push(employeeFactory.create("John",1))
empArray.push(employeeFactory.create("Sam",2));

empArray.forEach((emp)=>{
  sayName.call(emp);
})
console.log(empArray)