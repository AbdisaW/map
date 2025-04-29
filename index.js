// function createBook(title,author,pages){
//   return{
//     title,
//     author,
//     pages,
//     describe(){
//       console.log(`The book ${this.title} by ${this.author} has ${pages} pages.`)
//     }
//   }
// }

// const book = createBook('Harry', 'J.K. Rowling', 500);
// book.describe();

// function createCounter(count){
//   return{
   
//     increment(){
//       count++;

//     },
//     decrement(){
//       count--;
//     },
//     getCount(){
//       return count;
//     }

//   }

// }

// const counter = createCounter(0);
// counter.increment();
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());


// function Student(name, grade){
  
//     this.name = name;
//     this.grade =grade;
//     this.study =function(){
//       console.log(`Student ${this.name} is studying for grade ${this.grade}`)
//     }
// }

// const student = new Student('John', 10);

// student.study();


// function Circle(radius){
//  this.radius =radius;
//  this.area =function(){
//    console.log(Math.PI *radius*radius) 
//  }
// }
// const c =new Circle(5)
// c.area();

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  console.log(Math.PI * this.radius * this.radius);
};

const c1 = new Circle(5);
c1.area();