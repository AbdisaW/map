
// Factory function

function createAddress(street, city, ZipCode){
  return{
    street,
    city,
    ZipCode
  }

}
const address = createAddress('a', 'b', 'c');
console.log(address);



// Counstroctor function
function Address(street, city, ZipCode){
  this.street=street;
  this.city = city;
  this.ZipCode=ZipCode
}

const address1 = new Address('a', 'b', 'c')

console.log(address1);