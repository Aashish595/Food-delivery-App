import React from 'react'
import Header from '../../component/Header/Header'
import './Home.css'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import { useState } from 'react'
import AppDownload from '../../component/AppDownload/AppDownload'
function Home() {

  const [category, setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
