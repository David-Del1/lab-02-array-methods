import { map } from './array-methods.js';

describe('map(arr, callback)', () => {
  it('Takes an array and callback fn, creates new array with the return value of each called callback', () => {
    const numbers = [1, 2, 3, 4];
    const addTwo = number => number + 2;

    expect(map(numbers, addTwo)).toEqual([3, 4, 5, 6]);
  });
});
