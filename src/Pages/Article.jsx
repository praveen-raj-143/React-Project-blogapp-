import React from 'react'
import { useLocation } from 'react-router-dom'
import './Style.css'
const Article = () => {
  const locate= useLocation()
  // console.log(locate)
  return (
    <div className='artpost'>
      <h1>{locate.state.data.name}</h1>
      <img src={locate.state.data.imageurl} alt="not found" className='imagea' />
      <p>{locate.state.data.discription}</p>
    </div>
  )
}

export default Article