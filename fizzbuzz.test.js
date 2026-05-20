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
});