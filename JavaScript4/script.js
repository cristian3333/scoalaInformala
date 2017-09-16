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

console.log("the min is " + minim(grades2));
console.log("the max is " + maxim(grades));
console.log("the number is at position " +  maxPosition(grades, maxim(grades)));
maxPosition(13);

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
    displayNote(sortedArray1);
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
    displayNote(sortedArray2);
    return  sortedArray2;
}
console.log(sortDesc(grades));
console.log(sortAsc(grades2));

// ==================================================  SORT GRADES FROM 1 to 10=========================
var note = []; 

function generateRandom1to10(){
    return Math.floor(Math.random() * 10);
}

function displayNote(a){
    var eleviHTML = "";
    for(var i=0; i<a.length; i++){
        eleviHTML += "<div>Nota: " + a[i] + "</div><br>";
    }
    document.getElementById("note").innerHTML = eleviHTML;
}


function generateRandomArray(){
    var randomNote = [];
    for(var i = 0; i< 10; i++){
        var valoareRandom = generateRandom1to10();
        randomNote.push(valoareRandom);
    }
    return randomNote;
}

note = generateRandomArray();
displayNote(note);
