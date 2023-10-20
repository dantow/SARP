import './NavigationBar.css'
import { useNavigate } from 'react-router-dom'

function NavigationBar () {
  const navigate = useNavigate()

  return (
    <div className='navigationBar'>
      <img className='logo' src={process.env.PUBLIC_URL + '/sarp.png'} alt="logo" />
      <button id='tabs' onClick={() => navigate('/')}>Home</button>
      <button id='tabs' onClick={() => navigate('/map')}>Map</button>
    </div>
  )
}

export default NavigationBar
