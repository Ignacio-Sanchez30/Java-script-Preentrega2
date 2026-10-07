const mensajeDespedida = "Gracias por usar la calculadora ¡Hasta luego!";
let calculadoraEncendida = true;

const solicitarNumero = (mensaje) => parseFloat(prompt(mensaje));

function calcular(num1, num2, operacion) {
    if (operacion === "1" || operacion === "+") {
        return num1 + num2;
    } else if (operacion === "2" || operacion === "-") {
        return num1 - num2;
    }
    return 0;
}

function mostrarSalida(num1, num2, operacion, resultado) {
    if (operacion === "1" || operacion === "+") {
        alert("El resultado de la suma es: " + resultado);
        console.log("Operacion: " + num1 + " + " + num2 + " con resultado: " + resultado);
    } else if (operacion === "2" || operacion === "-") {
        alert("El resultado de la resta es: " + resultado);
        console.log("Operacion: " + num1 + " - " + num2 + " con resultado: " + resultado);
    }
}

const resultadosHistoricos = [10, 25, 40, 55, 100];

resultadosHistoricos.splice(2, 1, 42);

function listarHistorial(lista) {
    console.log("HISTORIAL DE RESULTADOS");
    for (const res of lista) {
        console.log("Resultado guardado: " + res);
    }
    console.log("Total de operaciones guardadas: " + lista.length);
}

while (calculadoraEncendida) {
    let operacion = prompt(
        "¿Qué operación deseas realizar?\n" +
        "1. Sumar (+)\n" +
        "2. Restar (-)\n" +
        "3. Ver historial de resultados\n" +
        "4. Buscar un resultado en el historial\n" +
        "5. Borrar el último resultado del historial\n" +
        "6. Apagar calculadora"
    );

    if (operacion === "6") {
        alert(mensajeDespedida);
        calculadoraEncendida = false;
        console.log("El usuario apagó la calculadora");
        continue;
    }

    let num1, num2, resultado;
    if (operacion === "1" || operacion === "+" || operacion === "2" || operacion === "-") {
        num1 = solicitarNumero("Ingresa el primer número:");
        num2 = solicitarNumero("Ingresa el segundo número:");

        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: Debes ingresar números válidos.");
            console.warn("El usuario ingresó un valor no numérico.");
            continue;
        }
    }

    switch (operacion) {
        case "1":
        case "+":
        case "2":
        case "-":
            resultado = calcular(num1, num2, operacion);
            mostrarSalida(num1, num2, operacion, resultado);
            
            resultadosHistoricos.push(resultado);
            break;

        case "3":
            listarHistorial(resultadosHistoricos);
            alert("Revisa la consola para ver el historial.");
            break;

        case "4":
            let buscado = solicitarNumero("Ingresa el resultado a buscar:");
            if (resultadosHistoricos.includes(buscado)) {
                let posicion = resultadosHistoricos.indexOf(buscado);
                alert("El resultado " + buscado + " SÍ está en el historial (en el índice " + posicion + ").");
            } else {
                alert("El resultado " + buscado + " NO está en el historial.");
            }
            break;

        case "5":
            if (resultadosHistoricos.length > 0) {
                let eliminado = resultadosHistoricos.pop();
                alert("Se ha eliminado el último registro: " + eliminado);
            } else {
                alert("El historial ya está vacío.");
            }
            break;

        default:
            alert("Opción no reconocida. Por favor, ingresa un número del 1 al 6.");
            console.warn("Opción incorrecta en el menú");
            break;
    }
}