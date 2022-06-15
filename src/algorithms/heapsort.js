export function heapSortAnimation(arr){
    let arrAnimation = []
    heapSort(arr, arrAnimation)
    return arrAnimation
  }

  function heapSort(arr, arrAnimation){
    // create a binary tree with max at top... start by heapifying starting at bottom of tree up
    // swap max at top with last index... normal arr swap [0] with [i]
    // heapify top so next max is at top... arr with shortened 
    // swap with next last index... etc until sorted
    let n = arr.length
    console.log(arr)
    for(let i = Math.floor(n/2)-1; i>=0; i--){
      heapify(arr,n,i, arrAnimation)
    }

    for(let i = n-1; i>0; i--){
      arrAnimation.push([0,0,i]) // color top and last index to be switched
      arrAnimation.push([0,0,i]) // uncolor them
      let temp = arr[0]
      arr[0] = arr[i]
      arr[i] = temp
      arrAnimation.push([0,i,arr[i],0,arr[0]]) // switch top and last index
      heapify(arr, i, 0, arrAnimation)
    }
    console.log(arr)
  }
  
  function heapify(arr,n,top, arrAnimation){
    let largest = top
    let left = 2*top +1
    let right = 2*top +2
    let notLargest
    
    if(left<n){
      arrAnimation.push([left,right, top]) // color left and top, uncolor right
      arrAnimation.push([left, right,top]) // color right and top, uncolor left
    }

    if(left<n && arr[left]>arr[largest]){
      largest = left
      notLargest = right
    }

    
    if(right<n && arr[right]>arr[largest]){
      largest = right
      notLargest = left
    }

    if(largest!=top){
      let temp = arr[top]
      arr[top] = arr[largest]
      arr[largest] = temp
      arrAnimation.push([notLargest, largest, arr[largest], top, arr[top]]) // uncolor all, switch top and largest
      heapify(arr,n,largest,arrAnimation)
    } else{
      left<n?arrAnimation.push([left,right,arr[right],top,arr[top]]):arrAnimation
    }
    console.log(arrAnimation)
  }