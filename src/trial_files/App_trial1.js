import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {array:[],
                  arrAnimation:[]}
  }
  componentDidMount(){
    this.generateRandomArray() // is this necessary??????
  }
  generateRandomArray(){
    let array = []
    for(let i = 0; i<6; i++){
      array.push(getRandomInt(5,1000))
    }
    this.setState({array : array, arrAnimation :array})
  }
  
  resolveAfterTime(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({arrAnimation:x})
        console.log('hi')// why does the array need to be input as an object/ in curly brackets?
        resolve(x); // what is best practice for async/await/promises
      }, 100);
    });
  }
  
  async bubbleSort(){
    let array = this.state.array
    let arrAnimation = array
    let noSwapCount = 0; let swapCount = 0;

    while(noSwapCount<1){
      for(let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
          let a = array[i]
          array[i] = array[i+1];
          array[i+1] = a; 
          swapCount += 1; 
          arrAnimation = array
          await this.resolveAfterTime(arrAnimation)
        }   
      }
      swapCount ===0? noSwapCount +=1: swapCount = 0
    }
  }


    
  
  mergeSort(arr, first, last){
    // option 1: create actual arrays of each half, and merge as you go
    // option 2: keep long array and specify by index
    // option 3: recursion- have fnc split in half and sort if cannot be split anymore
    console.log(arr, first, last)
    console.log(`state.array = ${this.state.array} arranimation = ${this.state.arrAnimation}`)
    let mid
    if(first<last){
      mid = Math.floor((last+first)/2) // set mid which will be last for first half and first for second half
        console.log('entering mergeSort1')
      this.mergeSort(arr, first, mid) 
        console.log('entering mergeSort2')
      this.mergeSort(arr, mid+1, last)
        console.log('entering merge sequence')
      this.merge(arr, first, mid, last)
    } else{return;}
    console.log(arr)
  }

  async merge(arr, first, mid, last){
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
    //console.log(`this is length1 ${length1} and length2 ${length2}`)

    //Merge the two subarrays together sorted low to high
    let i = 0, j = 0, k = first
    while(i<length1 && j<length2){
      if(leftArr[i]<rightArr[j]){
        arr[k] = leftArr[i]
        i++
      } else{
        arr[k] = rightArr[j]
        j++
      }
      k++
      console.log(`this is arr${arr} and this is k ${k} i ${i} j ${j}`)
      await this.arrAnimation(arr)
      
      //console.log(`this is after iteration ${k}`, `And the new array ${arr}`)
    }

    //If leftArr has leftover numbers
    while(i<length1){
      arr[k] = leftArr[i]
      i++
      k++
      //await this.arrAnimation(arr)
    }
    
    //If rightArr still has leftover numbers
    while(j<length2){
      arr[k] = rightArr[j]
      j++
      k++
      //await this.arrAnimation(arr)
    }
    //console.log(`this is the animation ${arrAnimation}`)
    //await this.resolveAfterTime(arr) 
    console.log(`this is after taking over the leftovers ${arr}`)
    
  }

  async arrAnimation(arr){
    let arrAnimation = arr
    await this.resolveAfterTime(arrAnimation)
  }

  render() { 
    const arrAnimation = this.state.arrAnimation; // what/ why is this necessary????
    const array = this.state.array;
    console.log(`render ${this.state.array} and render ${arrAnimation}`)
    return (
      <div>
        <h1>Hello World</h1>
        <div className='container' id='hover'>
          {arrAnimation.map((value,ind)=>(
            <div className = "bar" 
            key={ind} 
            style={{height:`${value/10}%`}}> </div>
        ))} 
        </div>
        <button id='new' onClick={()=>this.generateRandomArray()}>New Array</button>
        <button id = 'bubble' onClick={()=> this.bubbleSort()}>Bubble Sort</button>
        <button id = 'merge' onClick={()=> this.mergeSort(array, 0, array.length-1)}>Merge Sort</button>
      </div>
    );
  }
}

//developer.mozilla.org
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1) + min); //The maximum is inclusive and the minimum is inclusive
}

export default App;

