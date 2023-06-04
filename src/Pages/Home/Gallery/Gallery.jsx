import React from 'react'
import './Gallery.css'
const Gallery = () => {
  return (
    <div>
      
      <div className="gridcontainer">
        <div className="griditem grid1">
          <div className='txt'>
          <h1>Naruto Uzumaki</h1>
          <p>Anime : September 21, 1999</p>
          </div>
        </div>
        <div className="griditem grid2">
        <div className='txt2'>
          <h1>Itachi uchiha</h1>
          <p>Anime : September 21, 1999</p>
          </div>
        </div>
        <div className="griditem grid3">
        <div className='txt2'>
        <h1>Itachi uchiha</h1>
          <p>Anime : September 21, 1999</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery