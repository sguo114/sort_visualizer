export function insertionSortAnimation(arr){
    let arrAnimation = []
    insertionSort(arr,arrAnimation)
    return arrAnimation
  }

  function insertionSort(arr,arrAnimation){
    // 1) iterate through array.length
    // 2) Compare current with predecesser until greater than
    // 3) Insert current at point where greater than
    console.log(arr)
    for(let i = 1; i<arr.length; i++){
      let j = i
      let k = i-1
      while(arr[j]<arr[k]){
        arrAnimation.push([k,j]) // color bars being compared
        let temp = arr[j]
          arr[j] = arr[k] 
          arr[k] = temp 
        arrAnimation.push([k,arr[k],j,arr[j]]) // change height of bars being compared
        arrAnimation.push([k,j]) // uncolor bars being compared
          j = j-1
          k = k-1
      }
    }
    console.log(arr, arrAnimation)
  }