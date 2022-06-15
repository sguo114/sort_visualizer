export function mergeSort(array){  
    let arrAnimation = []
    mergeHalve(array, 0, array.length-1, arrAnimation)
    return arrAnimation
  }

    function mergeHalve(arr, first, last, arrAnimation){
      // Recursive portion that halves array until first and last index are equal
      let mid
      if(first<last){
        mid = Math.floor((last+first)/2) // set mid which will be last for first half and first for second half
        mergeHalve(arr, first, mid, arrAnimation) 
        mergeHalve(arr, mid+1, last, arrAnimation)
        merge(arr, first, mid, last, arrAnimation)
      } else{return;}
    }

    function merge(arr, first, mid, last, arrAnimation){
      let length1 = mid-first+1, 
          length2 = last - mid,
          leftArr = new Array(length1), 
          rightArr = new Array(length2)

      //Create subarrays for left and right halves
      for(let i=0; i<length1; i++){
        leftArr[i] = arr[first + i]
      }
      for(let j=0; j<length2; j++){
        rightArr[j] = arr[mid + 1 + j]
      }

      //Merge the two subarrays together sorted low to high
      let i = 0, j = 0, k = first, ichange= i+first, jchange = j+mid
      while(i<length1 && j<length2){
        arrAnimation.push([ichange, jchange]) // indexes of two bars being compared color
        arrAnimation.push([ichange, jchange]) // indexes of same bars being compared uncolor

        if(leftArr[i]<rightArr[j]){
          arr[k] = leftArr[i]
          arrAnimation.push([k,arr[k]]); // index of bar to change and height of bar
          i++
        } else{
          arr[k] = rightArr[j]
          arrAnimation.push([k,arr[k]]);
          j++
        }
        k++
      }
      

      //If leftArr has leftover numbers
      while(i<length1){
        arrAnimation.push([ichange,ichange])
        arrAnimation.push([ichange,ichange])
        arr[k] = leftArr[i]
        arrAnimation.push([k,arr[k]])
        i++
        k++
      }
      
      //If rightArr still has leftover numbers
      while(j<length2){
        arrAnimation.push([jchange,jchange])
        arrAnimation.push([jchange,jchange])
        arr[k] = rightArr[j]
        arrAnimation.push([k,arr[k]])
        j++
        k++
      }
    }
