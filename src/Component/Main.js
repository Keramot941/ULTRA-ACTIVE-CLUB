import React, { useState } from 'react'
import './style.css'
import Card from './MainPart/Card'
import Top from './MainPart/Top'
import Author from './SidePart/Author/Author'
import Details from './SidePart/Author/Details'

const Main = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [takeBreak, setBreakTime] = useState(0)

  return (
    
      <div className="main">
        <div className="left">
            <Top/>
            <Card setTotalTime={setTotalTime}/>
        </div>
        <div className="right">
            <Author/>
            <Details 
              totalTime={totalTime}
              takeBreak ={takeBreak}
              setBreakTime ={setBreakTime}
              setTotalTime={setTotalTime}
            />
        </div>
      </div>

  )
}

export default Main
