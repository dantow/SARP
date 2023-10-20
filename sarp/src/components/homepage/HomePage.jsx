import './Home.css'
import { useState } from 'react'

function Home () {
  const [welcomeText] = useState('Search..., plan... , travel...')

  return (
    <div className='home'>
      <div className='home-box'>
        <img className='home-logo' src={process.env.PUBLIC_URL + '/sarp-background.png'} alt="logo" />
        {welcomeText}
      </div>
    </div>
  )
}

export default Home
