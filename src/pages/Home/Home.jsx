import React, { useState } from 'react'
import './Home.css'
import Header from '../../componenets/Header/Header'
import ExploreMenu from '../../componenets/ExploreMenu/ExploreMenu'
import RoseDisplay from '../../componenets/RoseDisplay/RoseDisplay'
import AppDownload from '../../componenets/AppDownload/AppDownload'
const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
       <RoseDisplay category={category}/>
       <AppDownload/>
    </div>
  )
}

export default Home
