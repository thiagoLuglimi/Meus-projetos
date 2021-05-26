function ver(){
   var sal = document.getElementById('salario')
   var j = document.getElementById('jovem')
   var res = document.getElementById('resultado')
   
   var mult1 = Number(sal.value);
   var mult2 = Number(j.value);

   final = mult1*mult2/100;
   if(mult2==8 || mult2==2){
        
        res.innerHTML=`Olá, seu resultado mensal é ${final}R$`
   }else{
       alert('ops, digite apenas 8% ou 2%')
   }   

}

function Tot(){
    var depositoMensal = document.getElementById('mensal');
    var contribui = document.getElementById('contribuicao');
    var Resultado = document.getElementById('resTotal');

    var mes = Number(depositoMensal.value);
    var MesContribuido = Number(contribui.value);

    total = mes*MesContribuido;

    Resultado.innerHTML= `O seu valor total de FGTS é ${total}`
}




