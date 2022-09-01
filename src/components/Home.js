import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li><Link to={'/form'}>formis shevseba</Link></li>
            <li><Link to={'/listing'}>laps listing</Link></li>
        </ul>
    </div>
  )
}

export default Home