//Programa principal.

function main() {
    alert("Bienvenidos al calculador de promedios, podras ingresar la cantidad de notas por alumnos que quieras promediar. Al finalizar dicho proceso podras ver el listado de promedios y luego, que alumno tiene el promedio mas alto.");

    alert("!Atencion¡ Este programa solo admite dos tipos de datos: Las notas de cada alumno (en numero) y la palabra stop para detener el proceso de ejecucion. ");

    const alumnos = instanceStudents(); // Arreglo de alumnos instanciados.

    let acumulador = 0;
    let stop = false
    let cant = 0;
    let resultOperation = false;

    //Calcular Promedio de todos los alumnos.
    alumnos.map((alumno) => {

        while (!stop) {
            var input = prompt(`Ingrese la nota del ${alumno.nombre}`);

            if (input === null) {
                break;
            }

            if (validateNumber(input)) {
                acumulador = acumulador + parseInt(input);
                cant++;
                resultOperation = true;
            }
            else if (input === 'stop') {
                stop = true;
            } else {
                alert('El valor ingresado no es valido')
            }
        }

        stop = false;

        let prom = acumulador / cant;

        alumno.setProm(isNaN(prom) ? 'No se ingreso una nota valida' : prom); //Setea el promedio en el alumno.

    })

    //Listar Alumnos.
    let result = ''

    alumnos.map((alumno) => {
        result = result + `${alumno.nombre} Promedio: ${alumno.promedio} \n` //Mostrar los promedios
    })

    alert(result)

    //Calcular el maximo promedio    
    let maxProm = Math.max.apply(Math, alumnos.map(alumno => alumno.promedio));

    const alumnMaxProm = alumnos.filter(alumno => alumno.promedio === maxProm);

    alert(`El ${alumnMaxProm[0].nombre} es el mejor promedio con: ${alumnMaxProm[0].promedio}`);
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

function instanceStudents() {
    const alumnos = [];
    let i = 0;
    for (i; i < 5; i++) {
        let alumno = new Persona(`Alumno ${i}`);
        alumnos.push(alumno)
    }
    return alumnos;
}

//Ejecucion del programa principal.
main();
