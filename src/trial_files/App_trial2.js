import React, {Component} from 'react';
import { mergeSort } from '../mergesort';
import { quickSortAnimation } from '../quicksort';
import { bubbleSortAnimation } from '../bubblesort';
import { heapSortAnimation } from '../heapsort';
import './App.css';

let normalColor = 'black'
let swapColor = 'red'
let arraySize = 55
let sortSpeed = 1 // ms

class App extends Component {
  constructor(props){
    super(props);
    this.state = {array:[]}
  }

  componentDidMount(){
    this.generateRandomArray(arraySize) // is this necessary??????
  }

  generateRandomArray(arraySize){
    let array = []
    for(let i = 0; i<arraySize; i++){
      array.push(getRandomInt(10,1000))
    }
    this.setState({array : array, arrAnimation :array})
  }

  arraySizeSlide(){
    let arraySize = document.getElementById('sld').valueAsNumber
    this.generateRandomArray(arraySize)
  }

  resolveAfterTime(x) {// this is currently unused (it was the first method used for animation without color)
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({x})
        resolve(x); // what is best practice for async/await/promises
      }, sortSpeed);
    });
  }
  
  bubbleSortVisualizer(){
    let arrAnimation = bubbleSortAnimation(this.state.array)
    for(let i = 0; i<arrAnimation.length;i++){
      const bars = document.getElementsByClassName('bars')
      if(i%3 !== 2){
        setTimeout(()=>{
          let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
          bars[barIndex1].style.height = `${barHeight1/10}%`
          bars[barIndex1].style.backgroundColor = swapColor
          bars[barIndex2].style.height = `${barHeight2/10}%`
          bars[barIndex2].style.backgroundColor = swapColor
          }, i*10)
      } else{
        setTimeout(()=>{
          let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
          bars[barIndex1].style.height = `${barHeight1/10}%`
          bars[barIndex1].style.backgroundColor = normalColor
          bars[barIndex2].style.height = `${barHeight2/10}%`
          bars[barIndex2].style.backgroundColor = normalColor
          }, i*10)
      }
    }
  }

  mergeSortVisualizer(){
    let arrAnimation = mergeSort(this.state.array)
    for(let i = 0; i< arrAnimation.length; i++){
      const bars = document.getElementsByClassName('bars')
      
      if(i%3 !== 2){
        setTimeout(()=>{
          let [barIndex1, barIndex2] = arrAnimation[i]
          let color = i%3 === 0? swapColor: normalColor
          bars[barIndex1].style.backgroundColor = color
          bars[barIndex2].style.backgroundColor = color
          }, i*10)
      } else{
        setTimeout(()=>{
          let [barIndex1, barHeight1] = arrAnimation[i]
          bars[barIndex1].style.height = `${barHeight1/10}%`
          }, i*10)
      }
    }
  }

  async insertionSortVisualizer(){
    // 1) iterate through array.length
    // 2) Compare current with predecesser until greater than
    // 3) Insert current at point where greater than
    let array = this.state.array
    console.log(array)
    for(let i = 1; i<array.length; i++){
      let j = i
      let k = i-1
      while(array[j]<array[k]){
        let temp = array[j]
          array[j] = array[k] 
          array[k] = temp 
          j = j-1
          k = k-1
      }
      await this.resolveAfterTime(array)
    }
    console.log(array)
  }

  quickSortVisualizer(){
    let arrAnimation = quickSortAnimation(this.state.array)
    for(let i = 0; i< arrAnimation.length; i++){
      const bars = document.getElementsByClassName('bars')
      console.log('this is bars ' + bars)
      if(i%3 !== 2){
        setTimeout(()=>{
          let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
          bars[barIndex1].style.height = `${barHeight1/10}%`
          bars[barIndex1].style.backgroundColor = swapColor
          bars[barIndex2].style.height = `${barHeight2/10}%`
          bars[barIndex2].style.backgroundColor = swapColor
          }, i*10)
      } else{
        setTimeout(()=>{
          let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
          bars[barIndex1].style.height = `${barHeight1/10}%`
          bars[barIndex1].style.backgroundColor = normalColor
          bars[barIndex2].style.height = `${barHeight2/10}%`
          bars[barIndex2].style.backgroundColor = normalColor
          }, i*10)
      }
    }

  }

  heapSortVisualizer(){
    let arrAnimation = heapSortAnimation(this.state.array)
    for(let i = 0; i< arrAnimation.length; i++){
      const bars = document.getElementsByClassName('bars')
      console.log('this is bars ' + bars)
      if(i%3 !== 2){
        setTimeout(()=>{
          let [leftBarIndex, rightBarIndex, topBarIndex] = arrAnimation[i]
          let leftColor = i%3 ===0? swapColor:normalColor
          let rightColor= i%3 ===0? normalColor:swapColor
          bars[leftBarIndex].style.backgroundColor = leftColor
          bars[rightBarIndex].style.backgroundColor = rightColor
          bars[topBarIndex].style.backgroundColor = swapColor
          }, i*10)
      } else{
          if(arrAnimation[i].length>0){
            setTimeout(()=>{
              let [nLBarIndex, lBarIndex, lBarHeight, topBarIndex, topBarHeight] = arrAnimation[i]

              bars[topBarIndex].style.height = `${topBarHeight/10}%`
              bars[topBarIndex].style.backgroundColor = normalColor
              
              bars[lBarIndex].style.height = `${lBarHeight/10}%`
              bars[lBarIndex].style.backgroundColor = normalColor
              
              bars[nLBarIndex].style.backgroundColor = normalColor
            }, i*10)
         }
      }
    }
  } 

  render() { 
    const array = this.state.array; // what/ why is this necessary????

    return (
      <div className='big'>
        <div>
          <h1 className='banner'>Hello World</h1>
        </div>
        <div className='container' id='hover'>
          {array.map((value,ind)=>(
            <div className = "bars" 
            key={ind} 
            style={{height:`${value/10}%`}}> </div>
        ))} 
        </div>
        <div>
          <input type="range" min="5" max="100" id="sld" step = '10' onChange={()=>this.arraySizeSlide()}/>
          <button id='new' onClick={()=>this.generateRandomArray(arraySize)}>New Array</button>
          <button id = 'bubble' onClick={()=> this.bubbleSortVisualizer()}>Bubble Sort</button>
          <button id = 'merge' onClick={()=> this.mergeSortVisualizer()}>Merge Sort</button>
          <button id = 'insertion' onClick={()=> this.insertionSortVisualizer()}>Insertion Sort</button>
          <button id = 'insertion' onClick={()=> this.quickSortVisualizer()}>Quick Sort</button>
          <button id = 'insertion' onClick={()=> this.heapSortVisualizer()}>Heap Sort</button>
        </div>
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

