import TextChanger from '../elements/textchanger/TextChanger'
import './Home.css'

function Home () {
  return (
    <div className='home'>
      <div className='home-box'>
        <img className='home-logo' src={process.env.PUBLIC_URL + '/sarp-background.png'} alt="logo" />
        <TextChanger />
      </div>
    </div>
  )
}

export default Home
