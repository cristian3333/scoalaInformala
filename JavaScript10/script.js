//----------------------------------- GLOBAL VARIABLES/FUNCTIONS - START ----------------------------------------------------------------------------------------

var productsList=[];
var index = 0;
var item={};
var MENU_SERVER_URL = "https://talcioc-cristian-v1.firebaseio.com/productsList/.json";
// var SHOPPING_LIST_URL = "https://talcioc-cristian-v1.firebaseio.com/cartList/" + cartId + "/shoppingList/.json";
var CART_LIST_URL = "https://talcioc-cristian-v1.firebaseio.com/cartList/.json";
shoppingList=[];
cartList= [];

var config = {
  apiKey: "AIzaSyBzKpz3DlVJAlkOXxIw6pMDEGI4pFykwqw",
  authDomain: "talcioc-cristian-v1.firebaseapp.com",
  databaseURL: "https://talcioc-cristian-v1.firebaseio.com",
  projectId: "talcioc-cristian-v1",
  storageBucket: "talcioc-cristian-v1.appspot.com",
  messagingSenderId: "1097220088851",
};

firebase.initializeApp(config);


function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return productsList = returnArr;
};

function snapshotToArrayShopping(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return shoppingList = returnArr;
};

function snapshotToArrayCart(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return cartList = returnArr;
};

class Product {
  constructor(image, name, description, price, quantity, id){
  this.image = image;
  this.name = name;
  this.description =description;
  this.price = price;
  this.quantity = quantity;
  this.id = id;
  }
}

//----------------------------------- GLOBAL VARIABLES/FUNCTIONS - STOP ---------------------------------------------------------------------------------------







//-------------------------------  INDEX PAGE - START-------------------------------------------------------------------------------------------------------------

function getList(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      productsList = JSON.parse(xhttp.responseText);
      firebase.database().ref('/productsList').on('value', function(snapshot) {
        document.getElementById("clock").style.display = "none";
        snapshotToArray(snapshot);
        displayList();
      });
    }
  };
  xhttp.open("GET", MENU_SERVER_URL, true);
  xhttp.send();
}



function displayList(){
  var listHTML='';
  for(var i = 0; i< productsList.length; i++){
       listHTML += `
       <div class="f_l col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <img src="${productsList[i].image}" alt="">
          <h1>${productsList[i].name}</h1>
            <div>
              <span class="col-sm-6">
                  <span>${productsList[i].price}&nbsp;$</span>
              </span>
              <span class="col-sm-6">
                  
                  <a onclick="getProdus();" type="button" href="./details.html?id=${productsList[i].key}"><button id="details">DETALII</button></a>
              </span>
            </div>
       </div>     
          `;
  }
    document.getElementById("products_wrapper").innerHTML = listHTML;
}

//-------------------------------  INDEX PAGE - STOP-------------------------------------------------------------------------------------------------------------








//------------------------------------------------------------------  DETAILS PAGE -  START----------------------------------------------------------------------

// ----------------------------------   GET PRODUS, DISPLAY PRODUS,  ADDEDPRODUCT IN CART-----------------
function getProdus(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      item = JSON.parse(xhttp.responseText);
      firebase.database().ref('/productsList').on('value', function(snapshot) {
        snapshotToArray(snapshot);
        displayProdus();
        console.log(xhttp.responseText);
    });
    }
  };
  xhttp.open("GET", "https://talcioc-cristian-v1.firebaseio.com/productsList/" + index + "/.json", true);
  xhttp.send();
}

function displayProdus(){
        var preparatHTML = "<div id='product_wrapper' class= col-md-12>";
          preparatHTML += `
          <div class=" f_l col-md-6">
            <img src="${item.image}" alt="">
          </div>
          <div class=" f_l col-md-6">
            <h1>${item.name}</h1>
            <h3>${item.description}</h3>
            <h2>${item.price}&nbsp;$</h2>
            <h3>In stoc: ${item.quantity}</h3>
            Cantitate: <input required type="number" id="quantity" tabindex=2 placeholder="1"><br><br>
            <button id="addToCart" onclick="addProductToShoppingList()">ADAUGA IN COS</button><span id="aver">&nbsp;&nbsp;&nbsp;Cantitatea poate fi modificata din cosul de cumparaturi</span>
          </div>
          `;

        preparatHTML += "</div>";
        document.getElementById("produs_wrapper").innerHTML = preparatHTML;
        document.getElementById("clock").style.display = "none";
        document.getElementById("quantity").value = 1;
      }

     

function addProductToShoppingList(){ 
  var myOpacity=localStorage.getItem("opacity");
  // alert ("Produsul a fost adaugat");
  var prodImage = item.image;
  var prodName = item.name;
  var prodDescription = item.description;
  var prodPrice = item.price;
  var prodQuantity = document.getElementById('quantity').value;
  var prodId = index;

  var c = new Product(prodImage, prodName, prodDescription, prodPrice, prodQuantity,prodId );

  if(idCart === null || idCart === undefined || idCart === ''){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState == 4 && xhttp.status == 200) {
        firebase.database().ref('/cartList').on('value', function(snapshot) {
          snapshotToArrayCart(snapshot);
          console.log(xhttp.responseText)
          localStorage.setItem("idCart", JSON.parse(xhttp.responseText).name);
          console.log(idCart);
          document.getElementById("aver").style.opacity = "1";
          document.getElementById("addToCart").disabled = 'true';
          document.getElementById("addedWrapper").style.display = "block";
          
        });
      }
  }

    xhttp.open("POST", "https://talcioc-cristian-v1.firebaseio.com/cartList/.json", true);
    xhttp.send(JSON.stringify([c]));

    
  }
  else{

     var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                    
                      console.log(xhttp.responseText);
                      localStorage.setItem("opacity", 1);
                      document.getElementById("addToCart").disabled = 'true';
                      document.getElementById("aver").style.opacity = "1";
                      document.getElementById("addedWrapper").style.display = "block";
                      setTimeout(function(){  document.getElementById("addedWrapper").style.display = "none";}, 3000);
                    }
                  }
                  xhttp.open("POST", "https://talcioc-cristian-v1.firebaseio.com/cartList/" + idCart + ".json", true);
                  xhttp.send(JSON.stringify(c));

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            shoppingList = JSON.parse(xhttp.responseText);
           

            firebase.database().ref('/cartList/'+idCart).on('value', function(snapshot) {
              snapshotToArrayShopping(snapshot);
              
                for(let i = 0; i< shoppingList.length; i++){
                  console.log(JSON.parse(xhttp.responseText)[i]);
                  if(shoppingList[i].id === index){
                    console.log(JSON.parse(xhttp.responseText)[0].id);
                    console.log("wtf",JSON.parse(xhttp.responseText)[i].id);
                    var axhttp = new XMLHttpRequest();
                    axhttp.onreadystatechange = function() {
                      if (this.readyState == 4 && this.status == 200) {
                      
                        console.log(JSON.parse(axhttp.responseText));
                      }
                    }
                    axhttp.open("PUT", "https://talcioc-cristian-v1.firebaseio.com/cartList/" + idCart + "/"+ i +"/.json", true);
                    axhttp.send(JSON.stringify(c));

                  }
                }
            });
          }
        }
        xhttp.open("GET", "https://talcioc-cristian-v1.firebaseio.com/cartList/" + idCart + "/.json", true);
        xhttp.send();
      }
      
  }

  



//------------------------------------------------------------------  DETAILS PAGE -  STOP----------------------------------------------------------------------








//---------------------------------      ADMIN PAGE  - START    --------------------------------------------------------------------------------------------------------


//------------------------------------- START --------------------------------------------------
//DISPLAY list,GET list, 2 functions ---------------------------------------------------------------------

function getListAdmin(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      productsList = JSON.parse(xhttp.responseText);
      firebase.database().ref('/productsList').on('value', function(snapshot) {
        document.getElementById("clock").style.display = "none";
        snapshotToArray(snapshot);
        displayListAdmin();

      });
    }
  };
  xhttp.open("GET", MENU_SERVER_URL, true);
  xhttp.send();
}

function displayListAdmin(){
  var listHTML=`<span>Gestionare produse</span>
  <button onclick="displayListAdminAdd()">+ADAUGA PRODUS NOU</button>
  <table>
   <tr>
     <th>Imagine</th>
     <th>Nume</th>
     <th>Pret</th>
     <th>Cantitate</th>
     <th></th>
   </tr>`;
  for(var i = 0; i< productsList.length; i++){
       listHTML += `
       
        <tr>
        <td><img src="${productsList[i].image}" alt=""></td>
        <td><a onclick="index='${productsList[i].key}'; getProductEdit();" type="button">${productsList[i].name}</a></td>
        <td>${productsList[i].price}</td>
        <td>${productsList[i].quantity}</td>
        <td><a onclick="index='${productsList[i].key}';deletePrep()" href="#">Remove</a></td>
        </tr>
          `;
  }
    listHTML += "</table>"
    document.getElementById("products_wrapperAdmin").innerHTML = listHTML;
}



//------------------------------------- STOP ------------------------------------------------------------------
// DISPLAY,GET, 2 functions -----------------------------------------------------------------------------------


//------------------------------------- START -----------------------------------------------------------------
// DELETE PRODUCT-DELETE 1 function ------------------------------------------------------------

function deletePrep(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "https://talcioc-cristian-v1.firebaseio.com/productsList/" + index + "/.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
      if(xhttp.readyState == 4 && xhttp.status == 200) {
        window.location = "./admin.html";
      }
  }
  
}

//------------------------------------- STOP ------------------------------------------------------------------
//DELETE PRODUCT-DELETE 1 function -----------------------------------------------------------------------------------

//------------------------------------- START -----------------------------------------------------------------
// ADD FIELDS DISPLAY. ADD PRODUCT-POST, 2 functions ------------------------------------------------------------

function displayListAdminAdd(){
  var listHTML=`<table id='editProd'>
  <tr>
  <td><h1>Adaugare produs</h1></td>
  <td>
  <a><button id="admin1" onclick="addProduct()">+SAVE</button></a>
  <a href="./admin.html"><button id="admin2">CANCEL</button></a>
  </td>
  </tr>
  <tr>
      <td><span>Imagine:</span></td>
      <td class="w_70">
      <input id="myImage" tabindex=1 class="w_100 h_40">
      </td>
  </tr>
  <tr>
      <td><span>Nume:</span></td>
      <td class="w_70">
      <input id="myName" tabindex=2 class="w_100 h_40">
      </td>
  </tr>
  <tr>
      <td><span>Descriere:</span></td>
      <td class="w_70">
      <textarea id="myDescription" tabindex=3 class="w_100 h_80"></textarea>
      </td>
  </tr>
  <tr>
      <td><span>Pret:</span></td>
      <td class="w_70">
      <input id="myPrice" tabindex=4 class="w_100 h_40">
      </td>
  </tr>
  <tr>
      <td><span>Cantitate:</span></td>
      <td class="w_70">
      <input id="myQuantity" tabindex=5 class="w_100 h_40">
      </td>
  </tr>
</table>
          `;
    listHTML += "</table>"
    document.getElementById("products_wrapperAdmin").innerHTML = listHTML;
}

function addProduct(){
  
          var xhttp = new XMLHttpRequest();
          var prodImage = document.getElementById('myImage').value;
          var prodName = document.getElementById('myName').value;
          var prodDescription = document.getElementById('myDescription').value;
          var prodPrice = document.getElementById('myPrice').value;
          var prodQuantity = document.getElementById('myQuantity').value;
        
          var c = new Product(prodImage, prodName, prodDescription, prodPrice, prodQuantity );
          xhttp.open("POST", MENU_SERVER_URL, true);
          xhttp.send(JSON.stringify(c));
          xhttp.onreadystatechange = function() {
              if(xhttp.readyState == 4 && xhttp.status == 200) {
                window.location = "./admin.html";
              }
          }

  
  }

  //-------------------------------------- STOP ----------------------------------------------------------------
  //ADD FIELDS DISPLAY. ADD PRODUCT-POST, 2 functions ----------------------------------------------------------


  //------------------------------------- START -----------------------------------------------------------------
// EDIT FIELDS GET, EDIT FIELDS DISPLAY. EDIT PRODUCT-PUT, EDIT-FIELDS VALUES, SAVE  4 functions ---------------

function getProductEdit(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      item = JSON.parse(xhttp.responseText);
      firebase.database().ref('/productsList').on('value', function(snapshot) {
        snapshotToArray(snapshot);
        displayListAdminEdit();
        editProd();
    });
    }
  };
  xhttp.open("GET", "https://talcioc-cristian-v1.firebaseio.com/productsList/" + index + "/.json", true);
  xhttp.send();
}

function editProd(){
  
    document.getElementById('myImage').value = item.image;
    document.getElementById('myName').value= item.name;
    document.getElementById('myDescription').value = item.description;
    document.getElementById('myPrice').value = item.price;
    document.getElementById('myQuantity').value = item.quantity;
  }
  
  function displayListAdminEdit(){
    var listHTML=`<table id='editProduct'>
    <tr>
    <td><h1>Editare produs: ${item.name}</h1></td>
    <td>
    <a><button id="admin1" onclick="saveChanges()">+SAVE</button></a>
    <a href="./admin.html"><button id="admin2">CANCEL</button></a>
    </td>
    </tr>
    <tr>
        <td><span>Imagine:</span></td>
        <td class="w_70">
        <input id="myImage" tabindex=1 class="w_100 h_40">
        </td>
    </tr>
    <tr>
        <td><span>Nume:</span></td>
        <td class="w_70">
        <input id="myName" tabindex=2 class="w_100 h_40">
        </td>
    </tr>
    <tr>
        <td><span>Descriere:</span></td>
        <td class="w_70">
        <textarea id="myDescription" tabindex=3 class="w_100 h_80"></textarea>
        </td>
    </tr>
    <tr>
        <td><span>Pret:</span></td>
        <td class="w_70">
        <input id="myPrice" tabindex=4 class="w_100 h_40">
        </td>
    </tr>
    <tr>
        <td><span>Cantitate:</span></td>
        <td class="w_70">
        <input id="myQuantity" tabindex=5 class="w_100 h_40">
        </td>
    </tr>
  </table>
            `;
      listHTML += "</table>"
      document.getElementById("products_wrapperAdmin").innerHTML = listHTML;
  }
  
  function saveChanges(){
    var xhttp = new XMLHttpRequest();
    var prodImage = document.getElementById('myImage').value;
    var prodName = document.getElementById('myName').value;
    var prodDescription = document.getElementById('myDescription').value;
    var prodPrice = document.getElementById('myPrice').value;
    var prodQuantity = document.getElementById('myQuantity').value;
  
    var c = new Product(prodImage, prodName, prodDescription, prodPrice, prodQuantity );
    xhttp.open("PUT", "https://talcioc-cristian-v1.firebaseio.com/productsList/" + index + "/.json", true);
    xhttp.send(JSON.stringify(c));
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
           window.location = "./admin.html";
            
        }
    };
  }
  
  
  //------------------------------------- STOP -----------------------------------------------------------------
  // EDIT FIELDS GET, EDIT FIELDS DISPLAY. EDIT PRODUCT-PUT, EDIT-FIELDS VALUES, SAVE  4 functions functions ------------------------------------------------------------

  //---------------------------------      ADMIN PAGE  - STOP    --------------------------------------------------------------------------------------------------------






  //---------------------------------      SHOPPING LIST/CART PAGE  - START    --------------------------------------------------------------------------------------------------------

  var idCart = localStorage.getItem("idCart");
  var subTotal = 0;
  var total = 0;

  function subTotalIs(a,b){
    if (a === 0){
      return;
    }
      subTotal = (a*1) * (b*1);
      total += subTotal;
      return subTotal;
  }

  function updatedsubTotal(a, b,c){
    // if(a == null || a == undefined || a == 0 || a == ""){
    //   total =  0;
    // }
     c.innerText = (a * 1) * (b * 1) ;
     subTotal = (a * 1) * (b * 1) ;
     total=0;
     for(var i = 0; i< shoppingList.length; i++){
      total +=  parseInt(document.getElementById(`subTotal${i}`).innerText);
      
     }
     
    document.getElementById("total0").innerText = "Total: " + this.total + " $";

  }

//--------------------- SHOPPING LIST GET/DISPLAY  STAR --------------------------------------------------------------------------

  function resetData() {
    if(confirm("Are you sure you want to buy these items?")){
      var xhttp = new XMLHttpRequest();
      xhttp.open("DELETE", "https://talcioc-cristian-v1.firebaseio.com/cartList/" + idCart + "/.json", true);
  
      xhttp.send();
      xhttp.onreadystatechange = function() {
          if(xhttp.readyState == 4 && xhttp.status == 200) {
          }
      }
    }
 }

  function getShoppingList(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
        shoppingList = JSON.parse(xhttp.responseText);
        console.log(JSON.parse(xhttp.responseText));
        firebase.database().ref('/cartList/'+idCart).on('value', function(snapshot) {
          document.getElementById("clock").style.display = "none";
          snapshotToArrayShopping(snapshot);
          displayShoppingList(shoppingList);
        });
      }
    };
    xhttp.open("GET", "https://talcioc-cristian-v1.firebaseio.com/cartList/" + idCart + "/.json", true);
    xhttp.send();
  }

  function displayShoppingList(shoppingList){
    if(shoppingList.length === 0){
      var listHTML=`<h1>Nu aveti niciun produs in cos!</h1>`
      document.getElementById("shoppingCart_wrapper").innerHTML = listHTML;
    }else{
      var listHTML=`<h1>Cos de cumparaturi</h1>
      <table>
       <tr>
         <th>Nume</th>
         <th>Pret</th>
         <th>Cantitate</th>
         <th>Sub Total</th>
         <th></th>
       </tr>`;
      for(var i in shoppingList){
        if(!shoppingList.hasOwnProperty(i)){continue;}
          // var quantityValue = document.getElementById(`myQuantity${shoppingList[i].key}`).value;
           listHTML += `
            <tr>
            <td>${shoppingList[i].name}</td>
            <td>${shoppingList[i].price}</td>
            <td><input  tabindex="1" min="0" oninput="updatedsubTotal(this.value, ${shoppingList[i].price},this.parentElement.nextElementSibling)" type="number" id="myQuantity${shoppingList[i].key}" value="${shoppingList[i].quantity}"></td>
            <td id="subTotal${i}">${subTotalIs(shoppingList[i].price,shoppingList[i].quantity)}</td>
            <td><a onclick="index='${shoppingList[i].key}';deleteProdSL()" href="#">Remove</a></td>
            </tr>
              `;
             
      }
        listHTML += "</table>"
         listHTML += `
        <div id="Total">
          <span>Produse: ${shoppingList.length}</span><br>
          <span>TVA: 0 %</span><br>
          <span>Transport: 0 $</span><br>
          <h3 id="total0">Total: ${total} $</h3>
          <button onclick="resetData()">>CUMPARA</button>
        </div>`;
        document.getElementById("shoppingCart_wrapper").innerHTML = listHTML;
    }
    
  }


  function deleteProdSL(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "https://talcioc-cristian-v1.firebaseio.com/cartList/" + idCart + "/" + index + "/.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
        }
    }
    
  }

//--------------------- SHOPPING LIST GET/DISPLAY  STOP --------------------------------------------------------------------------



//--------------------- SHOPPING LIST GET/DISPLAY  START --------------------------------------------------------------------------



//--------------------- SHOPPING LIST GET/DISPLAY  STOP --------------------------------------------------------------------------



  //---------------------------------      SHOPPING LIST/CART PAGE  - STOP    --------------------------------------------------------------------------------------------------------
