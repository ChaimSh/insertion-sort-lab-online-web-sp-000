function findMinAndRemove(array){
  let min
  let minIndex = 0
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[0]){
      array[0] = array[i]
      min = array[0]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min
}

function selectionSort(array){

}
