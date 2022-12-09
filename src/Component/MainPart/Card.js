import React, { useEffect, useState } from 'react'



 function Card({setTotalTime}) {
    const [items,setInfo] = useState([])

    useEffect(()=>{
        fetch('/api.json')
        .then(res =>res.json())
        .then(data =>setInfo(data))
    },[])
  return (
      <div className='cardContainer'>
        {items.map(item=> (
            <div className='card'>
                <div className='card-img'>
                    <img src={item.img} style={{height:'160px', width:'100%'}} />
                </div>
                <div className='card-text'>
                    <h4>{item.Title}</h4>
                    <p className='bodyp'>{item.body}</p>
                    <p>For Age : {item.for_age}</p>
                    <p>Time Required : {item.time}</p>
                    <button onClick={() => setTotalTime(prevT => prevT + item.time)} className='btn'>Add To List</button>
                </div>
            </div>
        ))}
            
      </div>

  )
}
export default Card;