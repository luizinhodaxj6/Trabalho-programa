function calcularIMC(){
var peso = document.getElementById('peso').Value;
var altura = document.getElementById('altura').Value;
var imc = peso/(altura*altura);
document.getElementById('imc').Value=imc.toFixes(2);
}