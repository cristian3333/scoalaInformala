//----------WORKSHOP 07.10.2017-------------------

//--------VEIFY IF A NUMBER IS IMPAR------------------
function isImpar(nr){
  if(nr%2 == 1){
    return true;
  }else{
    return false;
  }
}
console.log("Is the number odd?: "+ isImpar(5));

function isPar(nr){
  if(nr%2 == 0){
    return true;
  }else{
    return false;
  }
}
console.log("Is the number even?: "+ isPar(5));

// function impare(){
//   var myArray = [];
//   for(var i=1; i<20; i++){
//     if(isImpar(i)){
//       myArray.push(i);
//       console.log(i);
//     }
//   }
//   return console.log(myArray);
// }
// impare();

var arrNumere = [1,2,8,17];

function impares(arr){
  var myArray = [];
  for(var i=0; i<arr.length; i++){
    if(isImpar(arr[i])){
      myArray.push(arr[i]);
    }
  }
  return console.log(myArray);
}
impares(arrNumere);


//----------  