
let numeroAdivinanza =5;
let min =1;
let max =10;
var numeroIngresado = parseInt(prompt('Ingrese un numero del 1 al 10'));

while(numeroIngresado != ''){
    if(numeroIngresado > max || numeroIngresado < min || numeroIngresado =='' ){
        alert('El valor es incorrecto');
    }
    if(numeroIngresado == numeroAdivinanza){
        alert('Adivinaste!');
        numeroIngresado='';
        continue
        
    }else{
        alert('Intenta nuevamente :(');
        numeroIngresado = parseInt(prompt('Ingrese un numero del 1 al 10'));
    }
}

