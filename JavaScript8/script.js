var menuList=[];
var index = 1;
var item=[];
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




function getList(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      firebase.database().ref('/menu').on('value', function(snapshot) {
        snapshotToArray(snapshot);
        document.getElementById("clock").style.display = "none";
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
        displayPreparat();
    }
  };
  xhttp.open("GET", "https://restaurant-cristian-v1.firebaseio.com/menu/" + index + "/.json", true);
  xhttp.send();
}

function displayList(){
  var ingredient = document.getElementById("input_wrapper").value;
  var listHTML = "<table>";

  for(var i = 0; i< menuList.length; i++){
    var ingrediente = menuList[i].ingrediente;

    if(!menuList[i].ingrediente.match( document.getElementById("input_wrapper").value) && document.getElementById("input_wrapper").value !== ''){ 
       menuList.splice(i, 1);
      i--; 
    }else{
      listHTML += `
      <tr>
      <td id="listImg"><img  src="${menuList[i].imagine}" alt=""></td>
      <td id="listInfo">
        <h2>${menuList[i].nume}</h2>
        <div>${menuList[i].ingrediente}</div>
      </td>
      <td id="listButtons">
        <a onclick="index=${i}; getPreparat()" type="button" href="./detalii.html?id=${menuList[i].key}"><button>DETALII</button></a>
      </td>
    </tr>`
    }
  }
    listHTML += "</table>";
    document.getElementById("food_wrapper").innerHTML = listHTML;
    document.getElementById('input_wrapper').focus(); 
}

function displayPreparat(){
        var preparatHTML = "<table>";
          preparatHTML += `
          <tr>
          <td id="preparatImg"><img  src="${item.imagine}" alt="">
          
          <h2>${item.nume}</h2>
          <div>${item.ingrediente}</div>
        </td>
          </tr>
          <tr>
          <td id="listInfo">
            <hr>
            <div>Instructiuni:<br><br> ${item.reteta}</div>
          </td>
        
        </tr>`

        preparatHTML += "</table>"
        document.getElementById("preparat_wrapper").innerHTML = preparatHTML;
      }
