
// console.log("a is grater than b : " + f3("abc 2", "abc 12"));

//////////////////////////////////////=======================DOOM---------------------------------------------------------------

// document.getElementById("moloz").innerHTML = "alt <br> moloz";

// document.getElementById("altParagraf").innerText = "alt <br>  moloz";

// var myDivs = document.getElementsByClassName("fancy");

// for(var i=0; i<myDivs.length; i++){
//     myDivs[i].innerHTML = myDivs[i].innerHTML + "it works" + " at " + Date();
// }

// .innerHtml OR  .style ----------------------------------css------------------
// document.getElementById("moloz").style.color = "black";
// document.getElementById("altParagraf").style.backgroundColor = "red";

// for img -  WHICH HAS NO CLOSING TAG ---------------------

// document.getElementById("altParagraf").getAttribute("src");

// document.getElementById("altParagraf").setAttribute("src", "");
// document.getElementById("altParagraf").src = ("src");
//------------------------------------------------------------------------------------------------------------------------------------------
// .classList.add();
// .classList.remove();


// .querySelector("");
// .querySelectorAll("#test .fancy span");

//------------------------------------------------------------------------------------------------------------------------------------------

// function changeColor(){
//     document.getElementById("moloz").style.backgroundColor="green";

// }
// function changeColor2(){
//     document.getElementById("moloz").style.backgroundColor="red";
    
// }


//------------------------------------------------------------------------------------------------------------------------------------------
// document.querySelector('#myForm [name ="firstName"]');

// var firstNameElem = document.querySelector('#myForm [name ="firstName"]');
// var lastNameElem = document.querySelector('#myForm [name ="lastName"]');

// alert(firstNameElem.value);

// function keyDown(){
//     console.log("keyDown", firstNameElem.value);
// }

// function keyUp(){
//     console.log("keyUp", firstNameElem.value);
// }
// function keyPress(){
//     console.log("keyPress", firstNameElem.value);
// }

// function change(){
//     console.log("change", firstNameElem.value);
// }
//------------------------------------------------------------------------------------------------------------------------------------------
// function input(event, elem){
//     console.log("input", elem.value);
//     document.getElementById("hello").innerHTML = "Servus" + " "+ elem.value  + " !";
// }
 
// or

// function input(event){
//     // console.log("input", elem.value);
//     document.getElementById("hello").innerHTML = "Servus" + " " + firstNameElem.value + " "+ lastNameElem.value + " !";
// }
//------------------------------------------------------------------------------------------------------------------------------------------
// function add(event){
//     var firstNumber = document.querySelector('#myForm [name ="firstNumber"]');
//     var secondNumber = document.querySelector('#myForm [name ="secondNumber"]');

//     var add = parseInt(firstNumber.value) + parseInt(secondNumber.value);

//     document.getElementById("sum").value = add;

    // if( isNaN(parseInt(firstNumber.value))){
    //     firstNumber.value = firstNumber.value + 0;
    // }
    // else if( isNaN(parseInt(secondNumber.value))){
    //     secondNumber.value = secondNumber.value + 0;
    // }
// }




function check(event){
    var firstValue = document.querySelector('#firstForm [name = "firstValue"]');
    var secondValue = document.querySelector('#firstForm [name = "secondValue"]');

    if(parseInt(firstValue.value) > parseInt(secondValue.value)){
        firstValue.style.color = "green";
        secondValue.style.color = "red";

    }else if(parseInt(firstValue.value) === parseInt(secondValue.value)){
        firstValue.style.color = "green";
        secondValue.style.color = "green";

    }else if(parseInt(firstValue.value) < parseInt(secondValue.value)){
        secondValue.style.color = "green";
        firstValue.style.color = "red";

    }else{
        firstValue.style.color = "red";
        secondValue.style.color = "red";
    }
    
}

function check2(event){
    var firstValue = document.querySelector('#secondForm [name = "firstValue"]');
    var secondValue = document.querySelector('#secondForm [name = "secondValue"]');

    var add = parseInt(firstValue.value) + parseInt(secondValue.value);

    document.getElementById("sum2").value = add;
    
}

function check3(event){
    var firstValue = document.querySelector('#thirdForm [name = "firstValue"]');
    var secondValue = document.querySelector('#thirdForm [name = "secondValue"]');

    if(parseInt(firstValue.value) > parseInt(secondValue.value)){
        document.getElementById("bigger").value = firstValue.value;

    }else if(parseInt(firstValue.value) === parseInt(secondValue.value)){
        document.getElementById("bigger").value = "They are equal."

    }else if(parseInt(firstValue.value) < parseInt(secondValue.value)){
        document.getElementById("bigger").value = secondValue.value;

    }    
}

function check4(event){
    var firstValue = document.querySelector('#fourthForm [name = "firstValue"]');
    var limit  = firstValue.value.length;
    
    document.getElementById("length").innerHTML = "The length of the input : " + "<p id =\"alertLimit\">" + limit + "</p>";
    
    if (limit >= 10){
        document.getElementById("alertLimit").style.color = "red";
        // firstValue.addEventListener("keypress", function(event){
        //     event.preventDefault()
        // });
    }
    // else{

    // }
    
}


function check5(event){
    var firstValue = document.querySelector('#fifthForm [name = "firstValue"]');
    
    var firstValueP = parseInt(firstValue.value);

    if(event.key >= "a" || event.key <= "z"){
        firstValue.addEventListener("keypress", function(event){
            event.preventDefault()
        });
    }else{

    }
    
}




// function add(event){
//     var firstNumber = document.querySelector('#myForm [name ="firstNumber"]');
//     var secondNumber = document.querySelector('#myForm [name ="secondNumber"]');

//     var add = parseInt(firstNumber.value) + parseInt(secondNumber.value);

//     document.getElementById("sum").value = add;

    // if( isNaN(parseInt(firstNumber.value))){
    //     firstNumber.value = firstNumber.value + 0;
    // }
    // else if( isNaN(parseInt(secondNumber.value))){
    //     secondNumber.value = secondNumber.value + 0;
    // }
// }


function check6(event, elem){
    // document.getElementById("altParagraf").getAttribute("src");

// document.getElementById("altParagraf").setAttribute("src", "");
    elem.src = ("http://www.drodd.com/images14/x12.jpg");
    console.log("mouseover", elem);
    console.log("mouseover", elem.value);

}

function check7(event, elem){

    elem.src = ("http://static.wixstatic.com/media/b77fe464cfc445da9003a5383a3e1acf.jpg");
    console.log("mouseout", elem);
    console.log("mouseout", elem.value);

}

function check8(event, elem){

    elem.src = ("http://www.drodd.com/images14/x12.jpg");
    console.log("click", elem);
    console.log("click", elem.value);

    elem.addEventListener("mouseout", function(event){
        event.preventDefault();
        event.stopPropagation();
    });
 
}