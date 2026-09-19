const mensajeDespedida = "Gracias por usar la calculadora. ¡Hasta luego!";
let calculadoraEncendida = true;

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

  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));

  let resultado;
  switch (operacion) {
    case "1":
    case "+":
      resultado = num1 + num2;
      alert("El resultado de la suma es: " + resultado);
      console.log(
        "Operación: " + num1 + "+" + num2 + " con resultado: " + resultado,
      );
      break;

    case "2":
    case "-":
      resultado = num1 - num2;
      alert("El resultado de la resta es: " + resultado);
      console.log(
        "Operación: " + num1 + "-" + num2 + " con resultado: " + resultado,
      );
      break;
    default:
      alert("Opción no reconocida. Por favor, ingresa un número del 1 al 3.");
      console.warn("Opción incorrecta en el menú.");
      break;
  }
}
