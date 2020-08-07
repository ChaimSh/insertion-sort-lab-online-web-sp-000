function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min
}



function selectionSort(array){
  let sortedArray = [];
  let min
  while (array.length > 0) {
    min = findMinAndRemove(array)
    sortedArray.push(min)
  }
  return sortedArray;
}
