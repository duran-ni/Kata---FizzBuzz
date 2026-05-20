export function fizzBuzz(number) {
    // 1. Validar primero si es divisible por 3 y 5 al mismo tiempo (el caso del 15)
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }
  // 2. Si no es quince, comprobar si es divisible por 3
  if (number % 3 === 0) {
    return 'Fizz';
  }
  // 3. Comprobar si es divisible por 5
  if (number % 5 === 0) {
    return 'Buzz';
  }
  // 4. Si no cumple ninguna de las anteriores, devolver el número como string
  return String(number);

}