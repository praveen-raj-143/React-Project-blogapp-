import React, { useEffect, useState } from 'react'
// import tech from '../Details/Techdata'
import top from '../Details/Top'
import './Style.css'
import {useNavigate} from 'react-router-dom'
const Hollywood = () => {
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
      <div className='normal'>
      <h1 className='title'>HOLLYWOOD</h1>
      {data.filter((item)=> item.category=== "hollywood").map((item)=>{
        return(
          <div className='box'  key={item._id}>
            <div className='imagea'><img src={item.imageurl} alt="not found" onClick={()=>detail(item._id, item)} className='imagea' /></div>
            <div className='textt'>
              <h2>{item.name}</h2>
              <p>{item.discription}</p>
            </div>
          </div>
        )
      })}
    </div>
    <div>
      <h1>TOP POSTS</h1>
      {top.map((item)=>{
        return(
          <div className='top'  key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.imageurl} alt="notfound" onClick={()=>detail(item.id, item)} className='imagea' />
          </div>
        )
      })}
      <div className='addpost'>
        <h1>ADVERTISEMENT</h1>
        
      </div>
    </div>
    </div>
  )
}

export default Hollywood