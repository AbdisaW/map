
const circle ={
  radius: 1,
  draw(){
    console.log('draw');
  }
};

for(let key in circle)
  console.log(circle[key]);

for(let key of circle)
  console.log(key)