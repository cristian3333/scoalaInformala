/*//--------- 30 sept WORKSHOP ----------

//--------------EXERCITIUL 1: maxim n nr.----------------------------

function max(arr){
  var maxim  = arr[0];

  for(var i = 0; i< arr.length; i++){
    if(arr[i] > maxim ){
      maxim = arr[i];
    }
  }
  return maxim;
}

console.log("The max is " + max([7,9,3]));


//------------------  Ex2 : media aritmetica----------------

function mA(arr){
  var s = 0;
  for(var i=0; i< arr.length; i++){
    s += arr[i]
  }
  return s / arr.length;
}

console.log("The max is " + mA([7,9,3]));

//-------------------- EX3 : produsul numerelor-----


function prod(arr){
  var p = 1;
  for(var i=0; i< arr.length; i++){
    p *= arr[i]
  }
  return p;
}

console.log("The multiplication is " + prod([7,9,3]));

// COMPARE :

//"a".localeCompare("b");

function maxi(arr){
  var maxim  = arr[0];

  for(var i = 0; i< arr.length; i++){
    if(arr[i].localeCompare(maxim) == 1){
      maxim = arr[i];
    }
  }
  return maxim;
}
console.log("The max string is " + maxi(["a","b","f","q"]));


 -------------------- Difference between LET and VAR- HOISTING-------- 

function varTest(){
  var x= 1;
  if(true){
    var x=2; //same var!
    console.log(x); //2
  }
  console.log(x); //2
}
console.log(varTest());

function letTest(){
  let x= 1;
  if(true){
    let x=2; //same var!
    console.log(x); //2
  }
  console.log(x); //2
}
console.log(letTest());

 -------------------- Classes--------

class Person{
  constructor(firstName,lastName){}
  this.firstName= firstName;
  this.lastName = lastName;
}



 --------------------     -------- 
*/

var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png

var gJson;
var hJson;

function afiseazaPrognoza(){
  var oras = document.getElementById("oras").value;
  console.log(oras);

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var json = this.responseText;
      hJson = json;

    document.getElementById("prognoza_wrapper").style.display ="block";
    
    var details = document.getElementById("hourDetails").innerHTML;
    console.log("details" + details);

    for(var i=JSON.parse(json).list.length-1; i>=0; i--){
      
      var imageP = JSON.parse(json).list[i].weather[0].icon;
      document.getElementById("imageP").src = `${URL_WEATHER_ICON_PREFIX}${imageP}.png`
  
      var temperaturaAcumP = JSON.parse(json).list[0].main.temp;
      document.getElementById("temperatura_acumP").innerHTML = `<p>Temperatura curenta:  ${temperaturaAcumP} </p>`
  
      var descriereP = JSON.parse(json).list[i].weather[0].description;
      document.getElementById("descriereP").innerHTML = `<p>Descriere:  ${descriereP} </p>`
  
      var oraP = JSON.parse(json).list[i].dt;
      document.getElementById("oraP").innerHTML = `<p>Ora:  ${moment.unix(oraP).format("HH:mm")} </p>`
  
      var dayP = JSON.parse(json).list[i].dt;
      document.getElementById("dayP").innerHTML = `<p>Ziua:  ${moment.unix(JSON.parse(json).list[i].dt).format("DD/MM/YYYY")} </p>`
      if(moment.unix(JSON.parse(json).list[i--].dt).format("DD") !== moment.unix(JSON.parse(json).list[i].dt).format("DD")){
        document.getElementById("dayP").style.backgroundColor = "lightblue";
        document.getElementById("moloz").style.clear = "both";
      }else{
        document.getElementById("moloz").style.display = "block";
      }
      
      document.getElementById("hourDetails").innerHTML = details + document.getElementById("hourDetails").innerHTML;
      
    }
    
    
    }
  };
  xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
  xhttp.send();
}

function afiseazaVremea() {
  var oras = document.getElementById("oras").value;
  console.log(oras);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //aici incepe se trateaza response de la server
      var json = this.responseText;
      h=json;

      document.getElementById("vremea_wrapper").style.display ="block";

      var image = JSON.parse(json).weather[0].icon;
      document.getElementById("image").src = `${URL_WEATHER_ICON_PREFIX}${image}.png`

      var temperaturaAcum = JSON.parse(json).main.temp;
      document.getElementById("temperatura_acum").innerHTML = `<p>Temperatura curenta:  ${temperaturaAcum} </p>`

      var descriere = JSON.parse(json).weather[0].description;
      document.getElementById("descriere").innerHTML = `<p>Descriere:  ${descriere} </p>`

      var umiditate = JSON.parse(json).main.humidity;
      document.getElementById("umiditate").innerHTML = `<p>Umiditate:  ${umiditate} </p>`

      var presiune = JSON.parse(json).main.pressure;
      document.getElementById("presiune").innerHTML = `<p>Presiune:  ${presiune} </p>`

      var minima = JSON.parse(json).main.temp_min;
      document.getElementById("minima").innerHTML = `<p>Minima zilei:  ${minima} </p>`

      var maxima = JSON.parse(json).main.temp_max;
      document.getElementById("maxima").innerHTML = `<p>Maxima zilei:  ${maxima} </p>`
      //aici se termina tratamentul raspunsului de la server
    }
  };
  xhttp.open("GET", URL_CURRENT_WEATHER + oras, false);
  xhttp.send();

}

function checkEnter(event){
  if(event.keyCode === 13){
    afiseazaVremea();
  }
}
