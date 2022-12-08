import React, { useState } from 'react'
import Home from '../component/homes/Home'
import Trending from '../component/trending/Trending';
import Upcomming from '../component/upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'

function HomePage() {

  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRce] = useState(recommended)

  return (
    <>
      <Home />
      <Upcomming items={items} title='Upcomming Movies'/>
      <Upcomming items={item} title='Latest Movies'/>
      <Trending />
      <Upcomming items={rec} title='Recommended Movies'/>
    </>
  )
}

export default HomePage