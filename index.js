function findMinAndRemove(array){
  let min = []
  for (i = 1; i < array.length - 1; i++) {
    if (array[i] < array[0]){
      array[0] = array[i]
      min = array[0]
    }
  }
}

function selectionSort(array){

}
