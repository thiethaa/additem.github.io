var button = document.getElementById ("button");
var input = document.getElementById ("userinput");
var ul = document.querySelector("ul");

button.addEventListener ("click", function(){
    if (input.value.length > 0){
        var li = document.createElement ("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    } 
})

input.addEventListener ("keypress", function(event){
    if (input.value.length > 0 && event.keyCode === 13){
        var li = document.createElement ("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    } 
})

//make it short and clean 

function inputlength(){
    return input.value.length;
}

function creatnewlist(){
    var li = document.createElement ("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addlistafterclick(){
    if (inputlength() >0) {
        creatnewlist();
    }
}

function addlistafterkeypress(event){
    if (inputlength()>0 && event.keyCode === 13){
        creatnewlist();
    }
}

button.addEventListener("click",addlistafterclick);

input.addEventListener("keypress", addlistafterkeypress);
