import React from 'react'
import food from '../Details/Fooddata'
import top from '../Details/Top'
import {useNavigate} from 'react-router-dom'
const Food = () => {
  const navigate = useNavigate()
  const detail=(id, item)=>{

    navigate(`/article/${id}`,{state:{data:item}})
  }
  return (
    <div className='container'>
      <div className='normal'>
      <h1 className='title'>FOOD</h1>
      {food.map((item)=>{
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

export default Food