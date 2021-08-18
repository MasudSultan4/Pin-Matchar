function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}

function ganeratPin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
   const number = event.target.innerText;
   const clacInput = document.getElementById('input-number')

   if(isNaN(number)){
    if(number == "C"){
        clacInput.value = '';
    }
}
   else{
    const previousNumber = clacInput.value;
    const newNumber = previousNumber + number;
    clacInput.value = newNumber;
   }
  
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('input-number').value;

    const sussesNotify = document.getElementById('match-pin');
    const failNotify = document.getElementById('didt-match');


    if(pin == typeNumber){
        sussesNotify.style.display = 'block'
        failNotify.style.display = 'none'

    }
    else{
        sussesNotify.style.display = 'none'
        failNotify.style.display = 'block'
    }
}