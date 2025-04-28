function Person(name, age){
  this.name =name;
  this.age =age;
  this.greet=function() {
   console.log(`Hi, I'm ${this.name} and ${this.age} years`);   
  }
}

const person1 = new Person('Abdi', 25)

person1.greet();