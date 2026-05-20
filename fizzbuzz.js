export function fizzBuzz(number) {
    // 1. Validar si el dato proporcionado no es un número de forma estricta
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('The provided data is not a number');
    
  }
  // 2. Validar si es divisible por 3 y 5 al mismo tiempo
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }

  // 3. Comprobar si es divisible por 3
  if (number % 3 === 0) {
    return 'Fizz';
  }

  // 4. Comprobar si es divisible por 5
  if (number % 5 === 0) {
    return 'Buzz';
  }

  // 5. Devolver el número como string
  return String(number);
}