var container = document.querySelector('#app div');
var btnElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');

var numbers = [
        
];

function renderNumber(){
    container.innerHTML="";
        ordena();
        console.log(numbers);
        var text = document.createTextNode(numbers);
        container.appendChild(text);
}

function ordena(){
    var a;
    for(var i = 0; i< numbers.length; i++){
        for(var j = i; j < numbers.length; j++){
            if(numbers[i] > numbers[j]){
                a = numbers[j]
                numbers[j] = numbers[i];
                numbers[i]= a;
                console.log(numbers)
            }
        }
       
    }
}

function addNumber(){
    if(inputElement.value >=0){
        numbers.push(inputElement.value);
        inputElement.value ="";
    }else{
        alert("Número negativo digitado.")
        renderNumber();
    }
   
}

btnElement.onclick = addNumber;