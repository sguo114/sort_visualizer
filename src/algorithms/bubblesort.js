  export function bubbleSortAnimation(arr){
    let arrAnimation = []
    bubbleSort(arr, arrAnimation)
    return arrAnimation
  }

  function bubbleSort(arr, arrAnimation){
    let noSwapCount = 0; let swapCount = 0;
    while(noSwapCount<1){
      for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
          let temp = arr[i]
          arrAnimation.push([i,arr[i],i+1,arr[i+1]]) // color 
          arr[i] = arr[i+1];
          arr[i+1] = temp; 
          swapCount += 1; 
          arrAnimation.push([i,arr[i],i+1,arr[i+1]]) // swap, still colored
          arrAnimation.push([i,arr[i],i+1,arr[i+1]]) // uncolor
          //await this.resolveAfterTime(array)
        }   
      }
      swapCount ===0? noSwapCount +=1: swapCount = 0
    }
  }