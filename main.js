//Programa principal.
function main() {
    alert("Bienvenidos al calculador de promedios, aqui podras promediar la edad de la cantidad de personas que quieras ingresar.");

    alert("!Atencion¡Este programa solo admite dos tipos de datos: edad para promediar (en numero) y la palabra stop para detener el proceso de ejecucion de promedios. ");

    var input = '0';
    var acumulador = 0;
    var stop = false
    var cant = 0;
    var resultOperation = false;
    let mensagge = 'El programa a finalizado. Reinicie para comenzar.'

    while (!stop) {
        var input = prompt('Ingrese una edad');

        if(input === null){
            break;
        }

        if (validateNumber(input)) {
            acumulador = acumulador + parseInt(input);
            cant++;
            resultOperation = true;
        }
        else if(input === 'stop'){
            stop = true;
        }else{
            alert('El valor ingresado no es valido')
        }
    }

    let prom = acumulador / cant;

    if(resultOperation){
        alert(`Su promedio es: ${prom}`);
        alert(mensagge)
    }else{
        alert(mensagge)
    }
}

//Funcion que valida si el parametro "input" es un numero valido.
function validateNumber(input) {
    const numbers = /^[0-9]*$/;

    if (numbers.test(input)) {
        return true;
    }
    else {
        return false;
    }
}

//Ejecucion del programa principal.
main();








