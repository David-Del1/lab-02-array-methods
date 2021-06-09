import { filter, map } from './array-methods.js';

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
