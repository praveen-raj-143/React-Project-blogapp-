// import React from 'react'
import './Latestarticles.css'
// const Latestarticles = () => {
//   return (
//     <div>
//       <h1>Latest Articles</h1>
//       <div className='lsta'>
      
//       <div className='article'>
//         <div className='articleitem'>
//           <div className='imgitem'>
//           </div>
//           <div className='txtitem'>
//           <h3>Ravindra Jadeja Is Pure Gold</h3>
//           <p>Ravindra Jadeja registered a half-century on Day 2 of the 1st Test against Australia in Nagpur. Earlier on Day 1, he had secured a 5-wicket haul in the same match.</p>
//           </div>
//         </div>
//         <div className='articleitem'>
//         <div className='imgitem'>
//           </div>
//           <div className='txtitem'>
//           <h3>Ravindra Jadeja Is Pure Gold</h3>
//           <p>Ravindra Jadeja registered a half-century on Day 2 of the 1st Test against Australia in Nagpur. Earlier on Day 1, he had secured a 5-wicket haul in the same match.</p>
//           </div>
//         </div>
//         <div className='articleitem'>
//         <div className='imgitem'>
//           </div>
//           <div className='txtitem'>
//           <h3>Ravindra Jadeja Is Pure Gold</h3>
//           <p>Ravindra Jadeja registered a half-century on Day 2 of the 1st Test against Australia in Nagpur. Earlier on Day 1, he had secured a 5-wicket haul in the same match.</p>
//           </div>
//         </div>
//         <div className='articleitem'>
//         <div className='imgitem'>
//           </div>
//           <div className='txtitem'>
//           <h3>Ravindra Jadeja Is Pure Gold</h3>
//           <p>Ravindra Jadeja registered a half-century on Day 2 of the 1st Test against Australia in Nagpur. Earlier on Day 1, he had secured a 5-wicket haul in the same match.</p>
//           </div>
//         </div>
//       </div>
      
//     </div>
//     </div>
//   )
// }

// export default Latestarticles

import React, { useEffect, useState } from 'react'

// import './Latest.css'

import {useNavigate} from 'react-router-dom'
const Latestarticles = () => {
  const navigate = useNavigate()
  const detail=(_id, item)=>{

    navigate(`/article/${_id}`,{state:{data:item}})
  }
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://reactblogbackend-3ubq.onrender.com")
    .then(res=>res.json())
    .then(data=>setData(data))
  })
  return (
    <>
    <h1>The Latest Articles</h1>
    <div className='lsta' >
      
      <div className='article'>
      {data.filter((item)=> item.category=== "articales").map((item)=>{
        return(
          <div className='articleitem'  key={item._id}>
            <img src={item.imageurl} alt="not found" onClick={()=>detail(item._id, item)} className='imgitem' />
            <div className='txtitem' >
              <h2>{item.name}</h2>
              <p>{item.discription}</p>
            </div>
          </div>
        )
      })}
    </div>
    <div className='addmain'>
      <div className='ad' >
        <p>Advertisment</p>
      </div>
      <div className='adto' >
        <p>Advertisment</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Latestarticles