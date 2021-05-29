function inserir(num){
    var x = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = x + num;
    
}
function apagar(){
    document.getElementById('resultado').innerHTML = '';
}

function apagar_um_por_um(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(res);
}