var menuList=[];
var index = 0;
var item={};
var MENU_SERVER_URL = "https://restaurant-cristian-v1.firebaseio.com/menu/.json";
var MENU_ITEM_SERVER_URL = "https://restaurant-cristian-v1.firebaseio.com/menu/.json";
//Exemplu de apel pentru detalii preparat: https://restaurant-menu-v1.firebaseio.com/menu/0.json - unde 0 este id-ul preparatului

var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://restaurant-cristian-v1.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
};

firebase.initializeApp(config);


function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return menuList = returnArr;
};

class Preparat {
  constructor(nume,imagine, ingrediente, reteta){
  this.nume = nume;
  this.imagine = imagine;
  this.ingrediente =ingrediente;
  this.reteta = reteta;
  }
}



function gif(){
  document.getElementById("food_wrapper").innerHTML = `<div id="clock"><svg width="200px" height="200px" margin:"auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-lds-clock">
  <g transform="translate(50 50)">
    <g ng-attr-transform="scale({{config.scale}})" transform="scale(0.8)">
      <g transform="translate(-50 -50)">
        <path ng-attr-fill="{{config.c1}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" d="M50,14c19.85,0,36,16.15,36,36S69.85,86,50,86S14,69.85,14,50S30.15,14,50,14 M50,10c-22.091,0-40,17.909-40,40 s17.909,40,40,40s40-17.909,40-40S72.091,10,50,10L50,10z" fill="#ff0000" stroke="#ff0000" stroke-width="3"></path>
        <path ng-attr-fill="{{config.c3}}" d="M52.78,42.506c-0.247-0.092-0.415-0.329-0.428-0.603L52.269,40l-0.931-21.225C51.304,18.06,50.716,17.5,50,17.5 s-1.303,0.56-1.338,1.277L47.731,40l-0.083,1.901c-0.013,0.276-0.181,0.513-0.428,0.604c-0.075,0.028-0.146,0.063-0.22,0.093V44h6 v-1.392C52.925,42.577,52.857,42.535,52.78,42.506z" fill="#000000" transform="rotate(115.2 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.25s" begin="0s" repeatCount="indefinite"></animateTransform>
        </path>
        <path ng-attr-fill="{{config.c2}}" d="M58.001,48.362c-0.634-3.244-3.251-5.812-6.514-6.391c-3.846-0.681-7.565,1.35-9.034,4.941 c-0.176,0.432-0.564,0.717-1.013,0.744l-15.149,0.97c-0.72,0.043-1.285,0.642-1.285,1.383c0,0.722,0.564,1.321,1.283,1.363 l15.153,0.971c0.447,0.027,0.834,0.312,1.011,0.744c1.261,3.081,4.223,5.073,7.547,5.073c2.447,0,4.744-1.084,6.301-2.975 C57.858,53.296,58.478,50.808,58.001,48.362z M50,53.06c-1.688,0-3.06-1.373-3.06-3.06s1.373-3.06,3.06-3.06s3.06,1.373,3.06,3.06 S51.688,53.06,50,53.06z" fill="#000000" transform="rotate(28.8 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="5s" begin="0s" repeatCount="indefinite"></animateTransform>
        </path>
      </g>
    </g>
  </g>
</svg></div>`;
}

function getList(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      menuList = JSON.parse(xhttp.responseText);
      firebase.database().ref('/menu').on('value', function(snapshot) {
        snapshotToArray(snapshot);
        displayList();
      });
    }
  };
  xhttp.open("GET", MENU_SERVER_URL, true);
  xhttp.send();
}

function getPreparat(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      item = JSON.parse(xhttp.responseText);
      firebase.database().ref('/contactList').on('value', function(snapshot) {
        snapshotToArray(snapshot);
        displayPreparat();
        editPrep();
    });
    }
  };
  xhttp.open("GET", "https://restaurant-cristian-v1.firebaseio.com/menu/" + index + "/.json", true);
  xhttp.send();
}

function displayList(){
  var listHTML = "<table>";

  for(var i = 0; i< menuList.length; i++){
      listHTML += `
      <tr>
      <td id="listImg"><img  src="${menuList[i].imagine}" alt=""></td>
      <td id="listInfo">
        <h2>${menuList[i].nume}</h2>
        <div>${menuList[i].ingrediente}</div>
      </td>
      <td id="listButtons">
        <a onclick="index=${i}; getPreparat(); editContact()" type="button" href="./delete.html?id=${menuList[i].key}"><button>STERGE</button></a>
        <a onclick="index=${i}; getPreparat();" type="button" href="./edit.html?id=${menuList[i].key}"><button>MODIFICA</button></a>
      </td>
    </tr>`;
  }
    listHTML += "</table>";
    document.getElementById("food_wrapper").innerHTML = listHTML;
}

function displayPreparat(){
        var preparatHTML = "<table id='editPrep'>";
          preparatHTML += `
          <tr>
            <td><span>Nume:</span></td>
            <td class="w_70">
              <input required type="text" id="prepName" tabindex=1 class="w_100 h_40">
            </td>
          </tr>
          <tr>
            <td><span>URL imagine:</span></td>
            <td class="w_70">
              <input required type="text" id="prepURL" tabindex=2 class="w_100 h_40">
            </td>
          </tr>
          <tr>
            <td><span>Ingrediente:</span></td>
            <td class="w_70">
              <textarea required type="text" id="prepIngrediente" tabindex=3 class="w_100 h_80"></textarea>
            </td>
          </tr>
          <tr>
            <td><span>Mod de preparare:</span></td>
            <td class="w_70">
            <textarea required type="text" id="prepReteta" tabindex=4 class="w_100 h_80"></textarea>
            </td>
          </tr>
          <tr>
          <td><a  onclick="saveChanges()" type="button"><button id="admin">Salveaza preparat</button></a></td>
        </tr>
          `;

        preparatHTML += "</table>";
        document.getElementById("preparat_wrapper").innerHTML = preparatHTML;
      }


function editPrep(){
  document.getElementById('prepName').value = item.nume;
  document.getElementById('prepURL').value = item.imagine;
  document.getElementById('prepIngrediente').value =item.ingrediente;
  document.getElementById('prepReteta').value = item.reteta;
  

}

function saveChanges(){
  var xhttp = new XMLHttpRequest();
  var prepName = document.getElementById('prepName').value;
  var prepURL = document.getElementById('prepURL').value;
  var prepIngrediente = document.getElementById('prepIngrediente').value;
  var prepReteta = document.getElementById('prepReteta').value;

  var c = new Preparat(prepName, prepURL, prepIngrediente, prepReteta ); 
  xhttp.open("PUT", "https://restaurant-cristian-v1.firebaseio.com/menu/" + index + "/.json", true);
  xhttp.send(JSON.stringify(c));
  xhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xhttp.readyState == 4 && xhttp.status == 200) {
         window.location = "./admin.html";
          
      }
  };
}

function deletePrep(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "https://restaurant-cristian-v1.firebaseio.com/menu/" + index + "/.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xhttp.readyState == 4 && xhttp.status == 200) {
        window.location = "./admin.html";
      }
  }
  
}


function addPrep(){
  //-------first try---------------------------------------------------
          var xhttp = new XMLHttpRequest();
          var prepName = document.getElementById('myNume').value;
          var prepURL = document.getElementById('myURL').value;
          var prepIngrediente = document.getElementById('myIngrediente').value;
          var prepReteta = document.getElementById('myreteta').value;
        
          var c = new Preparat(prepName, prepURL, prepIngrediente, prepReteta );
          xhttp.open("POST", MENU_SERVER_URL, true);
          xhttp.send(JSON.stringify(c));
          xhttp.onreadystatechange = function() {//Call a function when the state changes.
              if(xhttp.readyState == 4 && xhttp.status == 200) {
                window.location = "./admin.html";
              }
          }

  
  }