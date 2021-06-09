import { filter, findIndex, map, myReduce } from './array-methods.js';

describe('map(arr, callback)', () => {
  it('Takes an array and callback fn, creates new array with the return value of each called callback', () => {
    const numbers = [1, 2, 3, 4];
    const addTwo = number => number + 2;

    expect(map(numbers, addTwo)).toEqual([3, 4, 5, 6]);
  });
});

describe('filter(arr, callback', () => {
  it('takes an array and callback, creates new array with all items whose callback returned true or truthy', () => {
    const numbers = [2, 4, 6, 8, 10];
    const isMoreThan5 = item => item > 5;

    expect(filter(numbers, isMoreThan5)).toEqual([6, 8, 10]);
  });
});

describe('findIndex(arr, callback, [, initialValue])', () => {
  it('Takes an array and callback and returns the index of the first item whose callback returns true or truthy', () => {
    const numbers = [1, 2, 5, 7, 9];

    const isGreaterThan5 = item => item > 5;

    expect(findIndex(numbers, isGreaterThan5)).toEqual(3);
  });
});

describe('reduce(arr, callback, [, initialValue])', () => {
  it('Takes an array and callback, an optional second parameter as the initial value of accumulator, return value is passed as the argument of accumulator after each function call, and returns final accumulator value', () => {
    const words = ['hello', 'world', 'hello', 'dogs', 'hello', 'cats'];
    const countWords = wordList => {
      return myReduce(wordList, {}, (acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      });
      
    };

    expect(countWords(words)).toEqual({ hello: 3, world: 1, dogs: 1, cats: 1 });
  });
});
