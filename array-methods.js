

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
  if(arr.length === 0) {
    return initialValue;
  }
  else {
    const [first, ...rest] = arr;
    const updatedAcc = callback(initialValue, first);
    return myReduce(rest, updatedAcc, callback);
  } 
}
