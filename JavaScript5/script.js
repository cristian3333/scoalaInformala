var grades = [8, 7, 3, 9, 10, 2, 1];
var grades2 = [8, 7, 3, 9, 10, 2, 1];

function maxim(a){
    var max = 0;
    for (var i=0; i< a.length; i++){
        if (max < a[i]){
             max = a[i];
        }
    }
    return max;
}

function minim(a){
    
    var min= a[0]; 
    for (var i=0; i< a.length; i++){
        if (a[i] < min){
             min = a[i];
        }
    }
    return min;
}

function maxPosition(arr, a){
    var position =0;
    for (var k=0; k < arr.length; k++){
        if (a == arr[k]){
             return position = k;
        }
    }
}

function minPosition(arr, a){
    var position =0;
    for (var j=0; j < arr.length; j++){
        if (a == arr[j]){
             return position = j;
        }
    }
}

// console.log("the min is " + minim(grades2));
// console.log("the max is " + maxim(grades));
// console.log("the number is at position " +  maxPosition(grades, maxim(grades)));
// maxPosition(13);

function sortDesc(a){
    a = a.slice();
    var sortedArray1 = [];
    var nrElem = a.length;
    for(i=0; i< nrElem; i++){
        var maximum = maxim(a);
        var maximPosition = maxPosition(a, maximum);
        sortedArray1.push(maximum);
        a.splice(maximPosition,1);
    }
    // displayNote(sortedArray1);
    return  sortedArray1;
}
function sortAsc(a){
    a = a.slice();
    var sortedArray2 = [];
    var nrElem = a.length;
    for(i=0; i< nrElem; i++){
        var minimum = minim(a);
        var minimPosition = minPosition(a, minimum);
        sortedArray2.push(minimum);
        a.splice(minimPosition,1);
    }
    // displayNote(sortedArray2);
    return  sortedArray2;
}
console.log(sortDesc(grades));
console.log(sortAsc(grades2));

// ==================================================  SORT GRADES FROM 1 to 10=========================
// var note = []; 

// function generateRandom1to10(){
//     return Math.floor(Math.random() * 10);
// }

// function displayNote(a){
//     var eleviHTML = "";
//     for(var i=0; i<a.length; i++){
//         eleviHTML += "<div>Nota: " + a[i] + "</div><br>";
//     }
//     document.getElementById("note").innerHTML = eleviHTML;
// }


// function generateRandomArray(){
//     var randomNote = [];
//     for(var i = 0; i< 10; i++){
//         var valoareRandom = generateRandom1to10();
//         randomNote.push(valoareRandom);
//     }
//     return randomNote;
// }

// note = generateRandomArray();
// displayNote(note);

// -------------------------------------------------   TEma JS7 ---------------------------

// var elevi = ["mutulica", "nodica", "gigica", "mitica"];
// function displayElevi(a){
//     var eleviHTML = "";
//     for(var i=0; i<a.length; i++){
//         eleviHTML += "<tr><td>" + a[i] + "</td><td>a[i].nota</td><td><button onclick=\"showNote()\">Vezi notele</button></td></tr>" ;
//     }
//     document.getElementById("lista_elevi_wrapper").innerHTML = 
//     "<table><tr><th>Nume: /</th>&nbsp;<th>Medie note: /</th><th>&nbsp;&nbsp;&nbsp;</th></tr>" + eleviHTML + "</table>";
// }
// displayElevi(elevi);


     
// function displayNote(a){
//     var noteHTML = "";
//     for(var i=0; i<a.length; i++){
//         noteHTML += "<br>" + a[i] + "<br>";
//     }
//     document.getElementById("note_elev_wrapper").innerHTML = "<div style=\"text-align:center\">Nota: " + noteHTML + "</div><br>";
// }
// function generateRandom1to10(){
//     return Math.floor(Math.random() * 10);
// }
// var note = [];
// function addNote(event){
//     var nota = document.querySelector('#noteForm [name = "nota"]');
//     note.push(nota.value);
//     console.log(nota.value);
//     console.log(note);
//     displayNote(note);
    
// } 
// console.log(displayNote(note));
// function generateRandomArray(){
//     var randomNote = [];
//     for(var i = 0; i< 10; i++){
//         var valoareRandom = generateRandom1to10();
//         randomNote.push(valoareRandom);
//     }
//     return randomNote;
// }



function hideNote(){
    document.getElementById("noteForm").style.opacity = "0";
}

function showNote(){
    document.getElementById("noteForm").style.opacity = "1";
}


//-----------------------------------------------------------------   HOMEWORK -  in class-------------------------------

var elevi = [];
var note = [];
var indexElevPeCareAmDatClick;
var medieNote = [];

function adaugareElev(){
    var nume = document.getElementById("nume_elev").value;
    elevi.push(nume);
    note.push([]);
    medieNote.push(0);
    document.getElementById("nume_elev").value= '';
}

function displayElevi(){
    var htmlElevi = `
    <table>
        <tr>
            <th>Nume elev</th>
            <th>Medie note</th>
            <th></th>
        </tr>
            `;
    for(var i = 0; i<elevi.length; i++){
        htmlElevi += 
        `<tr>
            <td>${elevi[i]}</td>
            <td>${medieNote[i]}</td>
            <td>
                <button onclick=" indexElevPeCareAmDatClick=${i};displayNote()">Vezi notele</button>
            </td>
        </tr>`;
    }
    htmlElevi += "</table>"
    document.getElementById("lista_elevi").innerHTML = htmlElevi;
}

function displayNote(){
    document.getElementById("span_nume_elev").innerHTML = elevi[indexElevPeCareAmDatClick];
    document.getElementById("note_wrapper").style.display = "inline-block";
    document.getElementById("elevi_wrapper").style.width = "50%";
    document.getElementById("elevi_wrapper").style.float = "left";

//pas 1 - luam notele pe care le are elevul
    var noteElev = note[indexElevPeCareAmDatClick];
// pas 2 - compunem html cu notelele elevului
    var htmlNote="";
    for(var i=0; i<noteElev.length; i++){
        htmlNote += noteElev[i] + "<br>";
    }
// pas 3 - afisam htmk-ul cu notele elevului in ecran
    document.getElementById("lista_note").innerHTML = htmlNote;
}

function hideNote(){
    document.getElementById("note_wrapper").style.display = "none";
    document.getElementById("elevi_wrapper").style.width = "100%";
}


 //-----------varianta 1---------------------
// function adaugaNota(indexElevPeCareAmDatClick){
//     var nota = document.getElementById("note_elev").value;


// //preiau notele din lista de note din matrice
//     var noteElev=note[indexElevPeCareAmDatClick];
// ///verific daca lista e goala sau nu 
// var areElevulNotdeDejaAdaugate;

//     if(noteElev == undefined){
//         noteElev = [];
//         areElevulNotdeDejaAdaugate = false;
//     }
// //adaug nota nou in lista
//     noteElev.push(nota);
// // daca elevul nu avea note adaugate 
//     if(!areElevulNotdeDejaAdaugate){
//         note.push(noteElev);
//     }
//     console.log(note);

//     document.getElementById("note_elev").value= '';
// }

// varianta 2  finala -----------------------

function adaugaNota(){
// nota introdusa de utilizator in ecran
        var nota = document.getElementById("note_elev").value;
    
//preiau lista de note existente din matrice
        var noteElev = note[indexElevPeCareAmDatClick];
 
//adaug nota noua in lista
        noteElev.push(nota);
// daca elevul nu avea note adaugate 
        console.log(note);
    
        document.getElementById("note_elev").value= '';
    }


    function sumaNoteElev(){
        var noteElev = note[indexElevPeCareAmDatClick];
        var sum = 0;
        for(var i=0; i<noteElev.length; i++){
            sum += parseInt(noteElev[i]);
        }
        return sum;
    
    }

    function medieNoteElev(){

        var noteElev = note[indexElevPeCareAmDatClick];
        var sumaNote = sumaNoteElev();
        var nrNote = noteElev.length;
        var mediaNotelor = sumaNote / nrNote;
        return mediaNotelor;
    }