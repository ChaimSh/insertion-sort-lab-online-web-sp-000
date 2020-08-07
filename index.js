function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]){
      array[0] = array[i]
      min = array[0]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min
}

// function findMinAndRemove(array){
//   let currentMin = array[0]
//   let minIndex = 0
//   for(let i = 0; i < array.length; i++){
//     if(array[i] < currentMin){
//       currentMin = array[i]
//       minIndex = i
//     }
//   }
//   array.splice(minIndex, 1);
//   return currentMin;
// }

function selectionSort(array){

}
