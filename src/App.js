import React, {Component} from 'react';
import { bubbleSortAnimation } from './algorithms/bubblesort';
import { mergeSort } from './algorithms/mergesort';
import { insertionSortAnimation } from './algorithms/insertionsort';
import { quickSortAnimation } from './algorithms/quicksort';
import { heapSortAnimation } from './algorithms/heapsort';
import './App.css';

// this method does not allow for start and stop mid sort. It can stop but will then create a new array- because the array is already sorted.

let normalColor = 'black'
let swapColor = 'red'
let arraySize = 55
let sortSpeed = .122 // ms
let running = true

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
    if(running === true){
      running = false
      const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
      }, 0);
    }

    for(let i = 0; i<arraySize; i++){
      array.push(getRandomInt(10,1000))
    }
    this.setState({array : array})

    const bars = document.getElementsByClassName('bars')
    for(let i = 0; i<bars.length; i++){
      bars[i].style.backgroundColor = normalColor
    }
  }

  arraySizeSlide(){
    let arraySize = document.getElementById('sld').valueAsNumber
    this.generateRandomArray(arraySize)
  }

  sortSpeedSlide(){
    sortSpeed = document.getElementById('sortSpeed').valueAsNumber
  }

  resolveAfterTime(x) {// this is currently unused (it was the first method used for animation without color)
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({x})
        resolve(x); // what is best practice for async/await/promises
      }, sortSpeed);
    });
  }
  
  resetArray(){
    if(running === false){
      running = true
    } else{
      running = false
      const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
        this.generateRandomArray(arraySize)
        const bars = document.getElementsByClassName('bars')
        console.log(bars)
        for(let i = 0; i<bars.length; i++){
          bars[i].style.backgroundColor = normalColor
        }
      }, 0);
    }
  }

  bubbleSortVisualizer(){
    this.resetArray()
    console.log(this.state.array)

    let arrAnimation = bubbleSortAnimation(this.state.array)
    if(running ===true){
      for(let i = 0; i<arrAnimation.length;i++){
        const bars = document.getElementsByClassName('bars')
        console.log(running)
        if(i%3 !== 2){
          setTimeout(()=>{
            let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
            bars[barIndex1].style.height = `${barHeight1/10}%`
            bars[barIndex1].style.backgroundColor = swapColor
            bars[barIndex2].style.height = `${barHeight2/10}%`
            bars[barIndex2].style.backgroundColor = swapColor
            }, i/sortSpeed)
        } else{
          setTimeout(()=>{
            let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
            bars[barIndex1].style.height = `${barHeight1/10}%`
            bars[barIndex1].style.backgroundColor = normalColor
            bars[barIndex2].style.height = `${barHeight2/10}%`
            bars[barIndex2].style.backgroundColor = normalColor
            }, i/sortSpeed)
        }
        if(running === false){break;}
      }
    }
  }

  mergeSortVisualizer(){
    this.resetArray()
    let arrAnimation = mergeSort(this.state.array)

    if(running ===true){ 
      for(let i = 0; i< arrAnimation.length; i++){
        const bars = document.getElementsByClassName('bars')
        
        if(i%3 !== 2){
          setTimeout(()=>{
            let [barIndex1, barIndex2] = arrAnimation[i]
            let color = i%3 === 0? swapColor: normalColor
            bars[barIndex1].style.backgroundColor = color
            bars[barIndex2].style.backgroundColor = color
            }, i/sortSpeed)
        } else{
          setTimeout(()=>{
            let [barIndex1, barHeight1] = arrAnimation[i]
            bars[barIndex1].style.height = `${barHeight1/10}%`
            }, i/sortSpeed)
        }
        if(running === false){break;}
      }
    }
  }

  insertionSortVisualizer(){
    this.resetArray()
    let arrAnimation = insertionSortAnimation(this.state.array)

    if(running ===true){
      for(let i = 0; i<arrAnimation.length;i++){
        const bars = document.getElementsByClassName('bars')
        if(i%3 !== 1){
          setTimeout(()=>{
            let [barIndex1, barIndex2] = arrAnimation[i]
            let color = i%3 === 0? swapColor: normalColor
            bars[barIndex1].style.backgroundColor = color
            bars[barIndex2].style.backgroundColor = color
            }, i/sortSpeed)
        } else{
          setTimeout(()=>{
            let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
            bars[barIndex1].style.height = `${barHeight1/10}%`
            bars[barIndex1].style.backgroundColor = swapColor
            bars[barIndex2].style.height = `${barHeight2/10}%`
            bars[barIndex2].style.backgroundColor = swapColor
            }, i/sortSpeed)
        }
        if(running === false){break;}
      }
    }
  }

  quickSortVisualizer(){
    this.resetArray()
    let arrAnimation = quickSortAnimation(this.state.array)

    if(running ===true){
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
            }, i/sortSpeed)
        } else{
          setTimeout(()=>{
            let [barIndex1, barHeight1, barIndex2, barHeight2] = arrAnimation[i]
            bars[barIndex1].style.height = `${barHeight1/10}%`
            bars[barIndex1].style.backgroundColor = normalColor
            bars[barIndex2].style.height = `${barHeight2/10}%`
            bars[barIndex2].style.backgroundColor = normalColor
            }, i/sortSpeed)
        }
        if(running === false){break;}
      }
    }
  }

  heapSortVisualizer(){
    this.resetArray()
    let arrAnimation = heapSortAnimation(this.state.array)

    if(running ===true){
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
            }, i/sortSpeed)
        } else{
            if(arrAnimation[i].length>0){
              setTimeout(()=>{
                let [nLBarIndex, lBarIndex, lBarHeight, topBarIndex, topBarHeight] = arrAnimation[i]

                bars[topBarIndex].style.height = `${topBarHeight/10}%`
                bars[topBarIndex].style.backgroundColor = normalColor
                
                bars[lBarIndex].style.height = `${lBarHeight/10}%`
                bars[lBarIndex].style.backgroundColor = normalColor
                
                bars[nLBarIndex].style.backgroundColor = normalColor
              }, i/sortSpeed)
          }
        }
        if(running === false){break;}
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
        <div className = 'buttons'>
          <input type="range" min="5" max="85" id="sld" step = '10' onChange={()=>this.arraySizeSlide()}/> 
          <label for= 'sld'>Array Size</label>
          <input type="range" min=".002" max=".202" id="sortSpeed" step = '.04' onChange={()=>this.sortSpeedSlide()}/>
          <label for= 'sortSpeed'>Speed</label>
          <button id='new' onClick={()=>this.generateRandomArray(arraySize)}>New Array</button>
          <button id = 'bubble' onClick={()=> this.bubbleSortVisualizer()}>Bubble Sort</button>
          <button id = 'merge' onClick={()=> this.mergeSortVisualizer()}>Merge Sort</button>
          <button id = 'insertion' onClick={()=> this.insertionSortVisualizer()}>Insertion Sort</button>
          <button id = 'quick' onClick={()=> this.quickSortVisualizer()}>Quick Sort</button>
          <button id = 'heap' onClick={()=> this.heapSortVisualizer()}>Heap Sort</button>
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

