var itemList = [];
function addItem(){
  var elemHTML = document.getElementById('myInput').value;
  var list = document.getElementById('myList').innerHTML;
  itemList.push(elemHTML);
  console.log("itemList: " + itemList);
  for(var i=0; i<itemList.length; i++){
    document.getElementById('myList').innerHTML = list + "<tr><td name='items'><p>" + itemList[i] + "</p></td><td><button type='button' onclick='buyed(itemList)'>Mark as buyed</button></td></tr>";
}
  document.getElementById('myInput').value = '';
}

function checkEnter(event){
  if(event.keyCode === 13){
    addItem();
  }
}

function buyed(a){
  document.querySelector("td[name='items'] p").style.textDecoration = "line-through";
  //document.querySelector("td[name='items']").setAttribute("name","name");
  // for(var i=0; i<a.length; i++){
  // document.querySelector("td[name='items']").setAttribute("name",i);
  // document.querySelector("td[name='i'] p").style.textDecoration = "line-through";
  // }
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