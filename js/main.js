const mensajeDespedida = "Gracias por usar la calculadora. ¡Hasta luego!";
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
        console.log("Operación: " + num1 + "+" + num2 + " con resultado: " + resultado);
    } else if (operacion === "2" || operacion === "-") {
        alert("El resultado de la resta es: " + resultado);
        console.log("Operación: " + num1 + "-" + num2 + " con resultado: " + resultado);
    }
}

while (calculadoraEncendida) {
  let operacion = prompt(
    "¿Qué operación deseas realizar?\n" +
      "1. Sumar (+)\n" +
      "2. Restar (-)\n" +
      "3. Apagar calculadora",
  );

  if (operacion === "3") {
    alert(mensajeDespedida);
    calculadoraEncendida = false;
    console.log("El usuario apago la calculadora");
    continue;
  }

  let num1 = solicitarNumero("Ingresa el primer número:");
  let num2 = solicitarNumero("Ingresa el segundo número:");

  if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debes ingresar números válidos.");
        console.warn("El usuario ingresó un valor no numérico.");
        continue;
  }

  let resultado;
  switch (operacion) {
        case "1":
        case "+":
        case "2":
        case "-":
            resultado = calcular(num1, num2, operacion);
            mostrarSalida(num1, num2, operacion, resultado);
            break;

        default:
            alert("Opción no reconocida. Por favor, ingresa un número del 1 al 3.");
            console.warn("Opción incorrecta en el menú.");
            break;
    }
}