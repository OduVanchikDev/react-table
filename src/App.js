import React from 'react';
import { data } from './data';
import Num from './Num';


function App() {
  const title = [
    'наименование', new Array(31).fill().map((e,i) => e = i+1)]

  const store = JSON.parse(data) 
  const [state, setState] = React.useState(store)
  const [days, setDays] = React.useState(new Array(31).fill(0))
  const [works, setWork] = React.useState(new Array(6).fill(7))

  function sumIndex(index) {
    let sum = 0
    for (let key in state){
      sum += state[key][index]
    }
    return sum
  }
  
  React.useEffect(() => {
    daySum()
  },[state])
  React.useEffect(() => {
    workSum()
  },[state])

  function daySum() {
     const newDay = days.map((day, i) => day = sumIndex(i))
     setDays(newDay)
  }
  function workSum(){
    const keyArr = Object.keys(state)
    const sumWorks = works.map((work, i) => work = state[keyArr[i]].reduce((acc, sumDay) => acc + sumDay))
    setWork(sumWorks)
  }

  return (
    <div className="App">
      <table className='table'>
        <tr>
          <td className='text'>{title[0]}</td>
          {title[1].map(date => <td className='day'>{date}</td>)}
          <td className='text'>сумма ремонтов</td>
        </tr> 
        {Object.keys(state).map((key, row) =>
        <>
          <tr>
            <td className='text'>{key}</td>
            {state[key].map(function(number,i) {
            return <Num number={number} word={key} i={i} setState={setState} state={state}/>
            }
            )}
            <td className='day'>{works[row]}</td>
          </tr>       
        </>
        )}
        <tr>
            <td className='text'>сумма по дням</td>
            {days.map(day => <td className='day'>{day}</td>)}
        </tr>
      
      </table>
    </div>
  );
}

export default App;
