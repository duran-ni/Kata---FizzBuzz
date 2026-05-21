import { describe, it, expect } from 'vitest';
import { fizzBuzz } from './fizzbuzz.js';

describe('FizzBuzz Challenge', () => {
  it('should return "Fizz" when the number is divisible by 3', () => {
    // Given
    const input = 3;
    
    // When
    const result = fizzBuzz(input);
    
    // Then
    expect(result).toBe('Fizz');
  });
  it('should return "Buzz" when the number is divisible by 5', () => {
    // Given
    const input = 5;
    
    // When
    const result = fizzBuzz(input);
    
    // Then
    expect(result).toBe('Buzz');
  });

  it('should return "FizzBuzz" when the number is divisible by both 3 and 5', () => {
    // Dado que proporciono el número 15
    const input = 15;
    
    // Cuando ejecuto la función
    const result = fizzBuzz(input);
    
    // Entonces el resultado debe ser "FizzBuzz"
    expect(result).toBe('FizzBuzz');
  });

  it('should return the number as a string when it is not divisible by 3 or 5', () => {
    // Dado que proporciono el número 7
    const input = 7;
    
    // Cuando ejecuto la función
    const result = fizzBuzz(input);
    
    // Entonces el resultado debe ser "7"
    expect(result).toBe('7');
  });

  it('should throw an error when the input is not a number', () => {
    // Dado que proporciono el valor "hola"
    const input = 'hola';
    
    // Cuando y Entonces: Debe lanzarse un error con un mensaje específico
    expect(() => fizzBuzz(input)).toThrow('The provided data is not a number');
  });
});