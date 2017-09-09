function rest(a,b){
   
    var c=  a %  b;
    return c;
}

console.log(rest(7,5));
console.log(Math.PI);
// ------------------START COMPARE 2 STRINGS----------------------------------
"abc 2"
"abc 12"

// function sort(a,b){
        

//     for(var i=0; i< a.length || i < b.length; i++){
          
//         var = 1;

//         while(a[i] >= "a" && a[i] <="z" && b[i] >= 0 && b[i] <=9 || a[i] > b[i]){
//             b[i] += b[i+1];
//             return true;
//         }
//     }

// }

// console.log("a is grater than b : " + sort("abc 2", "abc 12"));

function f3(a, b){
    var i = 0;
    while(a[i] >= "a" && a[i] <= "z" && b[i] >= "a" && b[i] <= "z"){
        if (a[i] > b[i]) return -1;
            else if(a[i] < b[i]) return 1;
        i++;
    }
    if (a[i] >= "a" && a[i] <= "z" && !(b[i] >= "a" && b[i] <= "z")) return -1;
    if (!(a[i] >= "a" && a[i] <= "z") && b[i] >= "a" && b[i] <= "z") return 1;

    var n1 = 0;
    var n2 = 0;
    while(a[i] && b[i]){
        n1 = n1*10 + a[i];
        n2 = n2*10 + b[i];
        i++;
    }
    if (a[i]) {return -1;}
        else if(b[i]) {return 1;}
    if (n1 > n2) return -1;
        else if(n1 < n2) return 1;
    return 0;
}

console.log("a is grater than b : " + f3("abc 2", "abc 12"));
// ------------------STOP COMPARE 2 STRINGS------------------------------------------------------------------------------------------

// ---------------------NR1-FACTORIAL FOR A  NUMBER--------------------------------------------------
function factorial(n){

    var x=1;
    for(i=1; i<=n; i++){
         x= i*x
    }
    return x;
}
console.log("The factorial number : " + factorial("5"));

//------------------------------------------------------------------

// ---------------NR2 - CMMDC - GCD ---------------------------
//----------------------------------START Nr.2 - GCD -->
  
function gcd(a,b){
    if(b==0){
      return a
  }
  else if(a>b){
      return gcd(b, a%b);    
  }
  else{
  return gcd(a, b%a);
  } 
}

//----------------------------------STOP Nr.2 - GCD -->
//----------------------------------START Nr.3 - LCM -->
function lcm(a,b){
    return (a*b)/gcd(a,b) ;  
}
  console.log("The GCD of a and b is : " + gcd(210,45));
  console.log("The LCM of a and b is : " + lcm(210,45));
  
    //----------------------------------STOP Nr.3 - LCM -->
// -------- NR 4 - START - ALL DIVISORS IN ARRAY----------

function divisors(a){
    arr=[];
    for (i=2; i<a; i++){
        if(a % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(divisors(64));
// -------- NR 4 - STOP - ALL DIVISORS IN ARRAY----------

    //-----NR 5 START - ALL PRIME DIVISORS------------
// function allPrime(integer){
//     var primeArray = [];
//     var isPrime = false;
    
//     //find divisors starting with 2
    
//     for(i = 1; i <= integer; i++){
//     if (integer % i==0) {
    
//      //check if divisor is prime    
//      for(var j = 1; j <= i/1; j++) {
//        if(i % j == 0) {
//          isPrime = false;
//        } else {
//          isPrime = true;
//        }
//      }
    
//      //if divisor is prime
    
//         if (isPrime == true) {
//         //divide integer by prime factor & factor store in array primeArray
//         i = integer / i ;
//         primeArray.push(i);
//         }
//     }   
    
//     }
//     for (var k = 0; k < primeArray.length; k++) {
//         console.log(primeArray[k]);
//         }
//     return primeArray;
// }

// console.log(allPrime(64));

function allPrime(n){
    var i=2;
    while(i <= n){
        if(n%i == 0){
            n/=i;
            // console.log(i);
            // console.log(n);
        }else{
            i++;
            // console.log(i);
        }
    }
    return i;
// console.log(i);    
}
var a= 64;
console.log(allPrime(a));


//-----N3 5 STOP - ALL PRIME DIVISORS------------

// -------- NR 6 - START - ALL UNIQUE PRIME DIVISORS IN ARRAY----------

// -------- NR 6 - STOP - ALL UNIQUE PRIME DIVISORS IN ARRAY----------

//-------------NR 7 -----------------------

function LengthConverter(a) {
    return a/0.62137;
  }
  console.log("KM from Miles: "  + LengthConverter(10));
  
  function gallonConverter(a) {
    return a*3.78541178; 
  }
  console.log("Litres from Gallons: "  + gallonConverter(10));
   
   //-------------NR 8 Celsius to F -----------------------
   
   function fConverter(a) {
    return (a*1.8)+32; 
  }
  console.log("F from Celsius: "  + fConverter(10));
  
  //--------------Nr 9 Degrees in Radians----------
  
   function fConverter(a) {
    return (a*0.01745329252) 
  }
  console.log("Radians from Degrees: "  + fConverter(10));
  
  //--------NR 10 - Suplement of an angle-------------
  
   function suplement(a) {
    return (180 - a) 
  }
  console.log("Suplement of a "  + suplement(10));
   
   //--------NR 11 - Complement of an angle-------------
   
    function complement(a) {
    return (90 - a) 
  }
  console.log("Complement of a "  + complement(10));
   
  // NR 12 --- Array + array-----------
  
    function arrays(a,b) {  
     return a + ',' + b; 
  }
  console.log("The array is "  + arrays([10,11,12],[13,14,15]));


  // NR 13 ---------------   RETURN REVERSE------------------

  function reverse(a){
    
        var c = '';
    
        for(var i=a.length-1; i>=0; i--){
            c+= a[i]
        }
        if(c === a ){
             console.log('yeeeeeeeeeeey')
        }else{
            console.log('booooooooooooo')
        }
        return c;
    }
    
    console.log(reverse("anasana"));

    // NR 14 ---------------   Check Palindrome ------------------

    function checkPalindrome(a){
        
    return a == a.split('').reverse().join('');
    }
    

console.log(checkPalindrome("anssna"));