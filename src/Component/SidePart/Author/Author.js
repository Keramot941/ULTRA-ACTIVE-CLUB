import React from 'react'
import { GrLocation } from 'react-icons/gr'


const Author = () => {
  return (
    <div className='mainAuthor'>
      <div className='myDetails'>
        <div>
          <img src="../images/cv.jpg" alt='img'></img>
        </div>
        <div> 
          <h2>Md. Keramot Ali</h2>
          <p> <GrLocation />Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className='psds'>
        <div className='wha'>
          <h3>74<span>kg</span></h3>
          <p>Weight</p>
        </div>
        <div className='wha'>
          <h3>6.5"</h3>
          <p>Height</p>
        </div>
        <div className='wha'>
          <h3>20<span>yrs</span></h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  )
}

export default Author;
