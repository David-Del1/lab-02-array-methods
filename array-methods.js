export function map(arr, callback) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
  
    newArray[i] = callback(currentItem);
  }
  return newArray;
}

export function filter(arr, callback) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    
  }
}
