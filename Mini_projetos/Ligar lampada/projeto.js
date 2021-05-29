/*function soma(){
    var n1 = document.getElementById('pri')
    var n2 = document.getElementById('si')
    var resul = document.getElementById('RES')

    var soma1 = Number(n1.value);
    var soma2 = Number(n2.value);
    
    soma = soma1 + soma2;

    resul.innerHTML=`a soma de ${soma1} + ${soma2} é ${soma}`
}*/

function Ligar(){
    document.getElementById('lampada').src="./ligada.jpg"
}

function Desligar(){
    document.getElementById('lampada').src="./desligada.jpg"
}

function la(){
    document.getElementById("lampada").src="./quebrada.jpg"
}