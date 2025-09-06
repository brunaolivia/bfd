//Conversor de Moeda
let reais= 10.00;
let cotacaoDolar=5.42;
let dolares= reais/ cotacaoDolar;
console.log("Valor em reais:" + "R$" + reais);
console.log("Cotação do Dólar:" + "R$"+ cotacaoDolar.toFixed(2));
console.log("Valor em Dólar:" +"$"+ dolares.toFixed(2));

//Área do triângulo
let largura=9.50;
let altura= 4.25;
let area= largura*altura;
console.log("Largura:" + largura+ "cm");
console.log("Altura:" + altura + "cm");
console.log("Área do triângulo:"+ area.toFixed(2) +"cm²");

//Conversor de temperatura
let celsius=45;
let fahrenheit=( celsius* 9/5) +32;
console.log("Celsius:" + celsius+ "°C");
console.log("Fahrenheit:"+ fahrenheit+"F");

//Circuferência de um círculo
let raio= 4.20;
let circunferencia= 2*Math.PI*raio;
console.log("Raio:" + raio+ "cm")
console.log("Circunferência:" + circunferencia);

//Juros Simples
let capital= 1200;
let taxa=0.5;
let tempoMeses=8;
let calcularmontante= capital*(1+ taxa*tempoMeses);
console.log("Capital:"+ "R$"+ capital);
console.log("Taxa:" + taxa);
console.log("Tempo em meses:" + tempoMeses);
console.log("Montante:"+"R$"+ calcularmontante.toFixed(2));

//Média Aritmética de 4 valores
let Soma= 2+3+6+5;
let media= Soma/4;
console.log("Soma:" + Soma);
console.log("Média:" + media);


