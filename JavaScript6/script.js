index='';
var itemList = [];
function addItem(){
  var elemHTML = document.getElementById('myInput').value;
  var list = document.getElementById('myList').innerHTML;
  itemList.push(elemHTML);
  console.log("itemList: " + itemList);
  for(var i=0; i<itemList.length; i++){
    document.getElementById('myList').innerHTML = list + `<tr><td name="${index++}"><p id="change"> ${itemList[i]} </p></td><td><button type="button" onclick="index=${i}; bought()">Mark as bought</button></td></tr>`
}
  document.getElementById('myInput').value = '';
  document.getElementById('myInput').focus(); 
}

function checkEnter(event){
  if(event.keyCode === 13){
    addItem();
  }
}

function bought(){
  document.getElementById("change").setAttribute("class","bought");

  console.log(itemList[index]);

}

function sortAscending(a){
  a.sort();
  document.getElementById('myList').innerHTML ='<tr><th>Item description</th><th>Action</th></tr>';
  for(var i=0; i<a.length; i++){
    document.getElementById('myList').innerHTML = document.getElementById('myList').innerHTML + "<tr><td name='items'><p>" + a[i] + "</p></td><td><button type='button' onclick='buyed(itemList)'>Mark as buyed</button></td></tr>";
  }
  console.log("ASC SORTED itemList: " + itemList);
}

function sortDescending(a){
  a.sort();
  a.reverse();
  document.getElementById('myList').innerHTML ='<tr><th>Item description</th><th>Action</th></tr>';
  for(var i=0; i<a.length; i++){
    document.getElementById('myList').innerHTML = document.getElementById('myList').innerHTML + "<tr><td name='items'><p>" + a[i] + "</p></td><td><button type='button' onclick='buyed(itemList)'>Mark as buyed</button></td></tr>";
  }

  console.log("DESC SORTED itemList: " + itemList);
}