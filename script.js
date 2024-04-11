var btnSoma = document.getElementById('soma');
var btnSubtrai = document.getElementById('subtrai');
var btnMultiplica =  document.getElementById('multiplica');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btnDivide = document.getElementById('divide');
var resultado = document.getElementById('resultado');

const soma = () => {
    if(!verifyError()){
        resultado.innerHTML =  parseFloat(num1.value) + parseFloat(num2.value);
    }
}

const subtrai = () => {
    if(!verifyError()){
        resultado.innerText = parseFloat(num1.value)-parseFloat(num2.value);
    }
}
const multiplica = () => {
    if(!verifyError()){
        resultado.innerText = parseFloat(num1.value) * parseFloat(num2.value);
    }
}
const divide = () => {
    if(parseFloat(num2.value) === 0){
        resultado.innerHTML = "Impossível dividir por 0"
        return
    }
    if(!verifyError()){
        resultado.innerText = parseFloat(num1.value)/parseFloat(num2.value);
    }

}

const limpar = () => {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    resultado.innerText = ''
}

var verifyError = () => {
    if(!num1.value || !num2.value){
        resultado.innerHTML = "Digite os 2 valores"
        return true
    }
    return false
}

