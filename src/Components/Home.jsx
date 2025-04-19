import React from 'react'
import Logo from '../assets/images/Logo.png'

const Home = () => {
  const appear={
    height:'300px',
    width:'350px',
  }
  return (
    <div>
      
      <img src={Logo} style={appear}/>
    </div>
  )
}

export default Home
