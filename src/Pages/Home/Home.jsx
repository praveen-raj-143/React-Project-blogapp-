import React from 'react'
import Gallery from './Gallery/Gallery'
import Latest from './Latest/Latest'
import Latestarticles from './Latestarticles/Latestarticles'
import Lateststories from './Lateststories/Lateststories'

const Home = () => {
  return (
    <div>
        <Gallery/>
        <Latest/>
        <Latestarticles/>
        <Lateststories/>
    </div>
  )
}

export default Home