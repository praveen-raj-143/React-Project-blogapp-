import React, { useEffect, useState } from 'react'
// import Hollydata from '../Details/Hollydata'
import top from '../Details/Top'
import {useNavigate} from 'react-router-dom'
const Hollywood = () => {
  const navigate = useNavigate()
  const detail=(id, item)=>{

    navigate(`/article/${id}`,{state:{data:item}})
  }
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4065/hollywood")
    .then(res=>res.json())
    .then(child=>setData(child))
  })
  return (
    <div className='container'>
      <div className='normal'>
      <h1 className='title'>MOVIES</h1>
      {data.map((item)=>{
        return(
          <div className='box'  key={item.id}>
            <div className='imagea'><img src={item.imageurl} alt="not found" onClick={()=>detail(item.id, item)} className='imagea' /></div>
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