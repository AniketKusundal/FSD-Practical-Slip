import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h2>Home Page</h2>
        <Link to='/login'>GO To login</Link> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to ='/dashboard'>Go To Dashboard</Link>
    </div>
  )
}

export default Home
