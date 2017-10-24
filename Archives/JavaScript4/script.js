var contactList=[];
var index = '';

class Contact {
    constructor(name,phone){
    this.name = name;
    this.phone = phone;
    }
}

function addContact(){
    var contactName = document.getElementById('contactName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    if(index === null || index === undefined || index === ''){
        contactList.push(new Contact(contactName,phoneNumber));
    }else{
        contactList.splice(index,1,new Contact(contactName,phoneNumber));
    }
    
    document.getElementById('contactName').value = '';
    document.getElementById('phoneNumber').value= '';
    document.getElementById('contactName').focus();
    index = '';
    document.getElementById('contactsListWrapper').style.display= 'block';


}

function displayContacts(){
    var contactsListHTML =`
    <button onclick="sortAscending()">Sort Ascending</button>
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
        </tr>`;
    }
    contactsListHTML += "</table>"
    document.getElementById('contactsListWrapper').innerHTML = contactsListHTML;
}

function onlyNumbers(event){
    
    if(event.key >= "a" && event.key <= "z" || event.key >= "A" && event.key <= "Z"){
        event.preventDefault();    
    }

}

function editContact(){
    
    document.getElementById('contactName').value = contactList[index].name;
    document.getElementById('phoneNumber').value= contactList[index].phone;
    indexReset();
    console.log(contactList[index]);
}

function deleteContact(){
    contactList.splice(index,1);
    displayContacts();
    index = '';
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