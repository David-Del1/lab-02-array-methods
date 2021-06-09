

export function map(arr, callback) {

  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray[i] = callback(arr[i]);

    
  }
  return newArray;
}

export function filter(arr, callback) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {

    if((arr[i] !== undefined) && callback(arr[i])) newArray[newArray.length] = arr[i];
    
  }
  return newArray;
}

export function findIndex(arr, callback) {
  
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return i;
    }
  }
}

export function myReduce(arr, initialValue, callback) {
  let accumulator = initialValue;
  for(let i = 0; i < arr.length; i++) {
    
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}

export function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])) return false;
  }
  return true;
}
