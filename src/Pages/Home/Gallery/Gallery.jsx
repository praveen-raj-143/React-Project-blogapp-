// import React from 'react'
import './Gallery.css'
// const Gallery = () => {
//   return (
//     <div>
//       <div className="gridcontainer">
//         <div className="griditem grid1">
//           <div className='txt'>
//           <h1>Naruto Uzumaki</h1>
//           <p>Anime : September 21, 1999</p>
//           </div>
//         </div>
//         <div className="griditem grid2">
//         <div className='txt2'>
//           <h1>Itachi uchiha</h1>
//           <p>Anime : September 21, 1999</p>
//           </div>
//         </div>
//         <div className="griditem grid3">
//         <div className='txt2'>
//         <h1>Itachi uchiha</h1>
//           <p>Anime : September 21, 1999</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Gallery

import React, { useEffect, useState } from 'react'
// import tech from '../Details/Techdata'


import {useNavigate} from 'react-router-dom'
const Gallery = () => {
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
    <div className='container'>
      <div className='gridcontainer'>
      
      {data.filter((item)=> item.category=== "gallery").map((item)=>{
        return(
          <div className='griditem'  key={item._id}>
            <div className='imagea'><img src={item.imageurl} alt="not found" onClick={()=>detail(item._id, item)} className='imagea' /></div>
            <div className='textt'>
              <h2>{item.name}</h2>
              <p>{item.discription}</p>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Gallery