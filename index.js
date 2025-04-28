const address={
  street:"d",
  city: "ama",
  zipCode: 9090
}
function showAddress(address){
  for(let key in address)
    console.log(key, address[key])

}

showAddress(address)