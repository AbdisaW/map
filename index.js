
function createPerson(name, age){
  return{
    name,
    age,
    greet(){
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old ` );
      
    }
  }

}
const person = createPerson('Ali', 30)
person.greet();