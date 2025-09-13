let nome = document.getElementById("nome");
let salarioBruto = document.getElementById("salario");
let dependentes = document.getElementById("dependentes");
let botaoCalcular = document.getElementById("btn-calcular");
botaoCalcular.addEventListener("click", calcularSalario);

function calcularSalario(){
    let inss=0.0;
    let salarioBrutoValor=parseFloat(salarioBruto.value);
    let dependentesValor= parseInt(dependentes.value);
    let salarioLiquido=0.0;
    if(salarioBrutoValor<=300){
        inss=salarioBrutoValor*0.08;
    }else if(salarioBrutoValor>300&& salarioBrutoValor<=700){
        inss=salarioBrutoValor* 0.09;
    }else{
        inss=salarioBrutoValor*0.1;
    }
    salarioLiquido=salarioBrutoValor-inss+(15*dependentesValor)+40+100;
    alert("O salário líquido do(a) funcionário(a) "+ nome.value+" é de R$"+ salarioLiquido.toFixed(2));
}