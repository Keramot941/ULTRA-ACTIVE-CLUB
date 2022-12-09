import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Details = ({totalTime,takeBreak,setBreakTime,setTotalTime}) => {
  const [timeTable, setTimeTable] = useState(0)
  function calculateTime(timeTable){
    setTimeTable(timeTable)
    setBreakTime(0)
    setTotalTime(0)
    toast.success("Activies Completed")
  }
  return (
    <>
      <div>
        <h1 className='breakT'>Add A Break</h1>
        <div className='btnS'>
          <button onClick={() => setBreakTime(takeBreak+20)}>20</button>
          <button onClick={() => setBreakTime(takeBreak+30)}>30</button>
          <button onClick={() => setBreakTime(takeBreak+40)}>40</button>
          <button onClick={() => setBreakTime(takeBreak+50)}>50</button>
          <button onClick={() => setBreakTime(takeBreak+60)}>60</button>
          <button onClick={() => setBreakTime(takeBreak+70)}>70</button>
          <button onClick={() => setBreakTime(takeBreak+80)}>80</button>
        </div>
      </div>
      <div>
        <h1 className='breakT'>Exercise Details</h1>
        <div className="calculate">
          <div className="first">
            <h4>Excercise Time</h4><span>{totalTime}s</span>
          </div>
          <div className="first">
          <h4>Break Time</h4><span>{takeBreak}s</span>
          </div>
         </div>
      </div>
      <div className='activebtn'>
        <button onClick={() => calculateTime(totalTime-takeBreak)}>Activity Completed</button>
          <div className="first">
            <h4>Activity Time</h4><span>{timeTable}s</span>
          </div>
      </div>
      <div><Toaster/></div>
    </>
  )
}

export default Details;
