import React, { useEffect, useState } from 'react'

import './Latest.css'

import {useNavigate} from 'react-router-dom'
const Latest = () => {
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
    <h1>The Latest</h1>
    <div className='container'>
      
      <div className='latestcontainer'>
      {data.filter((item)=> item.category=== "latest").map((item)=>{
        return(
          <div className='latestitems'  key={item._id}>
            <img src={item.imageurl} alt="not found" onClick={()=>detail(item._id, item)} className='img' />
            <div >
              <h2>{item.name}</h2>
              <p>{item.discription}</p>
            </div>
          </div>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default Latest