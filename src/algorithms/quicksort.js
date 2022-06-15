export function quickSortAnimation(arr){
    let arrAnimation = []
    quickSort(arr, 0, arr.length-1, arrAnimation)
    return arrAnimation
  }
  
  function quickSort(arr, first, last, arrAnimation){
    //set pivot to last index- going through arr- pointer at first greater than. swap with first less than
    if(first<last){
      let pivotIndex = partition(arr, first, last, arrAnimation) // partition returns index of pivot w/ < to left and > to right 
      quickSort(arr, first, pivotIndex-1, arrAnimation) // sort lower than pivot side
      quickSort(arr,pivotIndex+1, last, arrAnimation) // sort greater than pivot side
    }
  }

  function partition(arr, first, last, arrAnimation){
    let pivot = arr[last]
    let i = first-1  // follows the left index that is numbers less than pivot 
    
    // think of two pointers- i is holding index of values less than pivot. j is pointing at next value to compare to pivot
    for(let j = first; j<last; j++){
      if(arr[j]<pivot){ // current index is less than pivot
        i++ // move index i to where new less than value will go
        arrAnimation.push([i,arr[i],j,arr[j]]) // color the ones being compared

        let temp = arr[j] 
        arr[j] = arr[i] 
        arr[i] = temp // swap the values
        
        arrAnimation.push([i,arr[i],j,arr[j]]) // show that they have been swapped
        arrAnimation.push([i,arr[i],j,arr[j]]) // uncolor them
      }
    }
    arrAnimation.push([i+1,arr[i+1],last,arr[last]]) // color the ones being compared
    
    let temp = arr[i+1]
    arr[i+1] = arr[last] // slide the pivot (last index) after final i index (= numbers smaller than pivot)
    arr[last] = temp

    arrAnimation.push([i+1,arr[i+1],last,arr[last]]) // show that they have been swapped
    arrAnimation.push([i+1,arr[i+1],last,arr[last]]) // uncolor them
    return (i+1)
  }