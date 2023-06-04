import React from 'react'
import Bollydata from '../Details/Bollydata'
import './Style.css'
import top from '../Details/Top'
import {useNavigate} from 'react-router-dom'
const Bollywood = () => {
  const navigate = useNavigate()
  const detail=(id, item)=>{
    // console.log(id, item)
    navigate(`/article/${id}`,{state:{data:item}})
  }
  return (
    <div className='container'>
      <div >
      <h1 className='title'>MOVIES</h1>
      {Bollydata.map((item)=>{
        return(
          <div className='box' key={item.id}>
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
          <div className='top' key={item.id}>
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

export default Bollywood