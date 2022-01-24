var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
// Eventos
var btnmais = document.getElementById('mais');
var btnmenos = document.getElementById('menos');

btnmais.addEventListener("click", increment);
btnmenos.addEventListener("click", decrement);
// Fim eventos
function increment()
{
    if(currentNumber < -1){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }

    if(currentNumber < 10)
    {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = currentNumber;
    }
}

function decrement()
{
    if(currentNumber <= 0){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}