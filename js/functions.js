// las  funcines deben tener un parentesis junto al nombre
function Operacionesbasicas(){
    var a;
    var b;
    var SUMA;
    var RESTA;
    var MULTIPLICACION;
    var DIVISION;

    a = parseInt(prompt("por favor ingrese el primer valor"));
    b = parseInt(prompt("por favor ingrese el sengundo valor"));

    SUMA = a +b;
    RESTA = a + b;
    MULTIPLICACION = a * b;
    DIVISION = a / b;

    alert("la suma total es: " + SUMA + "la resta es: " + RESTA + "la multplicacion es: " + MULTIPLICACION + " la division es: " + DIVISION );
    
}
function Cuadradodeunnumero(){
    var a = 0;
    var c = 0;
    a = parseInt(prompt("ingrese el numero a validar"));
    c = a * a;
    alert("el cuadrado del numero ingresado es: " + c);

}
function Areadeuntriangulo(){
    var a;
    var b;
    var c;
    b = parseInt(prompt("ingrese la base"));
    a = parseFloat(prompt("ingrese la altura"));
    c = (b * a) /2;
    alert("el area del triangulo es: " + c);
}
function Conversiondeunidades(){
    var a;
    var b;
    var c;
    a = parseInt(prompt("ingrese pulgadas"));
    b = a * 2.54;
    c = a * (1/ 39.370) * (1/1000);
    alert(" las pulgadas en centimetros es " + b);
    alert(" las pulgadas en kilometros es " + c);

}
function Serviciomilitar(){
    var edad = parseInt(prompt("por favor ingresar su edad"));
    var genero = prompt("por gavor ingresar Masculino o Femenino");
    if (genero == "Femenino"){
        alert("No eres apta para el servicio");
    }else{
        if (edad>17 && edad>25) {
            alert("eres apto para prestar el servicio militar");
        }else{
            alert("No eres aprto por edad")
        }
    }
}

function Anodenacimiento(){
   
    var año=2022;
    var edad=0;
    
    edad=parseInt(prompt("ingrese su edad"));

    B=año-edad

    alert("su año de nacimiento es:" + B);
}
function Banco(){

}
function Colegio(){
    var nota1;
    var nota2;
    var nota3;
    var nota4;
    var nota5;
    var nota6;
    var nota7;
                                                            
    
}