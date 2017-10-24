var contactList=[];
var index = '';

var getContactList = "https://agenda-cristian-v1.firebaseio.com/contactList/.json";

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://agenda-cristian-v1.firebaseio.com",
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

    return contactList = returnArr;
};

function getAgenda(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        firebase.database().ref('/contactList').on('value', function(snapshot) {
            snapshotToArray(snapshot);
            displayContacts();
        });
      }
    };
    xhttp.open("GET", getContactList, true);
    xhttp.send();
    
}



class Contact {
    constructor(name,phone){
    this.name = name;
    this.phone = phone;
    }
}

function saveChanges(){
    var xhttp = new XMLHttpRequest();
    var contactName = document.getElementById('contactName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var c = new Contact(contactName,phoneNumber); 
    xhttp.open("PUT", "https://agenda-cristian-v1.firebaseio.com/contactList/" + contactList[index].key + "/.json", true);
    xhttp.send(JSON.stringify(c));
    xhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            index = '';
            displayContacts();
        }
    }
}

function deleteContact(){
    var xhttp = new XMLHttpRequest();
    var contactName = document.getElementById('contactName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var c = contactList[index];
    xhttp.open("DELETE", "https://agenda-cristian-v1.firebaseio.com/contactList/" + contactList[index].key + "/.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            displayContacts();
            index = '';
        }
    }
    
}

function addContact(){
//-------first try---------------------------------------------------
        var xhttp = new XMLHttpRequest();
        var contactName = document.getElementById('contactName').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var c = new Contact(contactName,phoneNumber); 
        xhttp.open("POST", getContactList, true);
        xhttp.send(JSON.stringify(c));
        xhttp.onreadystatechange = function() {//Call a function when the state changes.
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
                displayContacts();
            }
        }


//second try ---------------------------------------------------------


    
    // if(index === null || index === undefined || index === ''){
    //     contactList.push(new Contact(contactName,phoneNumber));
    // }else{
    //     contactList.splice(index,1,new Contact(contactName,phoneNumber));
    // }
    
    document.getElementById('contactName').value = '';
    document.getElementById('phoneNumber').value= '';
    document.getElementById('contactName').focus();
    index = '';
    // document.getElementById('contactsListWrapper').style.display= 'block';
    // var set = setInterval(function(){ displayContacts() }, 3000);
    // clearInterval(set);

}





function displayContacts(){
//-- sugerata de Alin-------------------------------------------

    // var keys = Object.keys(contactList);
    
    //     for (var i = 0; i < keys.length; i++) {
        
    //     var key = keys[i];
        
    //     var item = contactList[key];
        
    //     contactList.push(new Contact(key, item.name, item.phone));
    //     }
//---------------nu e implementata
    var contactsListHTML =`
    <button onclick=" sortAscending()">Sort Ascending</button>
    <button onclick="sortDescending()">Sort Descending</button>
    <table>
     <tr>
        <th>Nume</th>
        <th>Telefon</th>
     </tr>`
     ;
    for(var i = 0; i< contactList.length; i++){
        contactsListHTML +=
        `<tr>
            <td>${contactList[i].name}</td>
            <td>${contactList[i].phone}</td>
            <td>
                <a href="#"  type="button" onclick="index=${i}; editContact()">Modifica</a>
            </td>
            <td>
            <a href="#" type="button" onclick="index=${i}; deleteContact()">Sterge</a>
        </td>
        </tr>`
    }
    contactsListHTML += "</table>"
    document.getElementById('contactsListWrapper').innerHTML = contactsListHTML;
    document.getElementById('contactsListWrapper').style.display= 'block';
    console.log("AM facut display!!!");
}
function onlyNumbers(event){
    
    if(event.key >= "a" && event.key <= "z" || event.key >= "A" && event.key <= "Z"){
        event.preventDefault();    
    }

}

function editContact(){
    
    document.getElementById('contactName').value = contactList[index].name;
    document.getElementById('phoneNumber').value= contactList[index].phone;
    document.getElementById('save').style.display= 'inline-block';
    document.getElementById('save').style.marginBottom= '20px';
    indexReset();
    console.log(contactList[index]);
}



function indexReset(){
    if (contactList.length === 0){
        index = '';
    }
}

function sortAscending(){
    contactList.sort(compare);
    displayContacts();
}
function sortDescending(){
    sortAscending();
    contactList.reverse(compare);
    displayContacts();
}


function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }