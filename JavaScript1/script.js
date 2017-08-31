var a = 5;
var b = 6.100 + a;
var test = 10;
var anaAreMere = "Ana are mere";
var arr = [9, 5, 100];

var aRR = "9" + 9;
var aRR2 = 9 + "9";
var aRR3 = 9 + 9;
var aRR4 = "9" + "9";

var apartment= {
    "nrCamere": 4,
    "suprafata": 80,
    "etaj": 3,
    "adresa": "str..."
};
//************************** */
var sum = function(){
    s=0;
    for(var i=0; i < arguments.length; i++){
        s += arguments[i];
    };
    return s;

};
var sum2 = function(){
    
    console.log(sum(100,200,300));
};
//***************************** */
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
    console.log("The number is prime : " + isPrime(37));
};
function isPrime1() {

    console.log("The number is prime : " + isPrime(37));
};


//********************************************** */
var multiply = function(){
        var c = a * b;
        console.log('C is = ' + c);
        return c;
    };

var showT = function(){
    var t = multiply() * 2;
    console.log(t);
    return t;
};
//**************************************++ */
function firstNrPrime(n){
    var primeNumbers= [];
    var nrFoundPrime = 0;
    var currentNumber = 2;
    while(nrFoundPrime < n){
        if(isPrime(currentNumber)){
            primeNumbers[nrFoundPrime] = currentNumber;
            nrFoundPrime++;
            console.log(currentNumber);
        }
        currentNumber++;
    }
    return primeNumbers;

};
function firstPrimes() {
    
    console.log(firstNrPrime(10));
    };

//*************************************** */

var alert1 = function (){
    alert("cf ?");
    console.log(a);
    console.log(b);
    console.log(anaAreMere);
    console.log(arr);
    console.log(aRR);
    console.log(aRR2);
    console.log(aRR3);
    console.log(aRR4);
};


var alert2 = function (){
    console.log(arr[1]);
    console.log(aRR);
    console.log(aRR2);
    console.log(aRR3);
    console.log(aRR4); 
    console.log(apartment);
    console.log(apartment["adresa"]);  
    console.log(apartment.adresa); 
}

//////////////////////////////****************** */
var dog1 = {
    "race":"bulldog",
    "feetNr": "4",
    "color": "white"
}

var dogs = [
    {
        "race":"bulldog1",
        "feetNr": "41",
        "color": "white1"
    },
    {
        "race":"bulldog2",
        "feetNr": "42",
        "color": "white2"
    },
    {
        "race":"bulldog3",
        "feetNr": "43",
        "color": "white3"
    },

];
dogs[3]={
    "race":"bulldog4",
    "feetNr": "44",
    "color": "white4"
};


function dogsArray() {
    
    console.log(dogs);
    console.log(dogs[0].race);
    };

dogs[4]={};
dogs[4].race="gimicho"
// 1- compare 2 values ********************* */

function compare2Values(a,b) {
    if(a == b){
        return true;
    }else{
        return false;
    }
    
};
console.log(compare2Values(2,2));

//*  2 ******************** */

function compare2(a,b){
    if(a < b){
        return "-1";
    }else if(a == b){
        return "0";
    }else{
        return "1";
    }
};
console.log(compare2(1,0));

//*****    3    ******** */

function returnmax(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}
console.log(returnmax(1,9));

//******** 4 ****************** */

function returnmin(a,b){
    if(a < b){
        return a;
    }else{
        return b;
    }
}
console.log(returnmin(1,9));

//******** 5 ****************** */

function sum1(a,b){

        var s = a + b;
        return s;
}
console.log("sum : " + sum1(1,9));


//******** 6 ****************** */

function dif(a,b){
    
            var s = a - b;
            return s;
    }
    console.log("dif : " + dif(1,9));

//******** 7 ****************** */

function divide(a,b){
    
            var s = a / b;
            return s;
    }
    console.log("divide : " + divide(1,10));
    

    //******** 8 ****************** */

function multiply1(a,b){
    
            var s = a * b;
            return s;
    }
    console.log("multiply1 : " + multiply1(1,9));
    
    //******** 9 ****************** */

function modulus1(a,b){
    
            var s = a % b;
            return s;
    }
    console.log("modulus1 : " + modulus1(20,9));

//******** 10  ARRAYS****************** */

function array1(){

        var array = [1,2,3,4,5];
        return array.length;
    }
    console.log("arrayLength : " + array1());

    //******** 11  ARRAYS****************** */

    function array2(myArray){
     
        var myArray2 = '';
        for (var i=0; i<myArray.length; i++ )
        {
            if(myArray[i] >= "0" && myArray[i] <= "9" ){
                myArray2+=(myArray[i]);
            }
        }
        return myArray2;
    }
    console.log("array2 has : " + array2("asdasdsadsad112312sasa211"));

//******** 12  ARRAYS****************** */

function array3(myArray){
    
       var myArray3 = '';
       for (var i=0; i<myArray.length; i++ )
       {
        //    if(myArray[i] === "a" || myArray[i] === "b" || myArray[i] === "c" || myArray[i] === "d" || myArray[i] === "e" || myArray[i] === "f" ){
        //        myArray3 += (myArray[i]);
        //    }
        if(myArray[i] >= "a" && myArray[i] <= "f"){
            myArray3 += (myArray[i]);
        }
       }
       return myArray3;
   }
   console.log("array3 has : " + array3("asbdasdsadsad112312safsa211"));

//******** 13  ARRAYS****************** */

function array4(myArray){
    
       var myArray4 = '';
       for (var i=0; i<myArray.length; i++ )
       {
           if(myArray[i] >= "a" && myArray[i] <= "z"){
               myArray4+=(myArray[i]);
               if(myArray4.length == 5 ){
                   break;
               }
           }
       }
       return myArray4;
   }
   console.log("array4 has : " + array4("1111a12sdasdsadsad112312sasa211"));

//******** 14  ARRAYS****************** */

function array5(myArray){
    
       var myArray5 = '';
       for (var i=myArray.length-1; i >= 0; i-- )
       {
           if(myArray[i] >= "a" && myArray[i] <= "z"){
               myArray5+=(myArray[i]);
               if(myArray5.length == 10 ){
                   break;
               }
           }
       }
       return myArray5;
   }
   console.log("array5 has : " + array5("1111a12sdasdsadsad112312zeceazecea211"));
//******** 15  ARRAYS****************** */

function array6(myArray,smth){

       for (var i=0; i < myArray.length; i++ )
       {
           if(smth == myArray[i] ){
             console.log(i);
             return i;
           }
       }
      
    }
   console.log("array6 : " + array6("ceai","a"));

//******** 16  ARRAYS****************** */

function array7(myArray,smth){
    
   for (var i=myArray.length-1; i >= 0; i-- )
   {
       if(smth == myArray[i] ){
         console.log(i);
         return i;
       }
   }
}
console.log("array7 has : " + array7("caal","l"));

//******** 17  ARRAYS****************** */

function array8(myArray){
    myArray8='';
   for (var i=0; i < myArray.length; i++ )
   {
       myArray8 += myArray[i];
   }
   return myArray8;
}
console.log("array8 has : " + array8(["ccc","aaa", "bbb"]));

//******** 18  ARRAYS****************** */

function array9(myArray,smth){
   var myArray9 = '';
   for (var i=0; i < myArray.length; i++ )
    {   
        if(myArray9.length < 5){
            myArray9 += myArray[i] + smth;
        }
        else if(myArray9.length == 8){
            myArray9 += myArray[i]
        }
        
    }
    return myArray9;
}
console.log("array9 has : " + array9(["ccc","aaa", "bbb"],"1"));

//******** ****************** */
