import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/homepage/HomePage'
import NavigationBar from './components/elements/NavigationBar'
import Map from './components/map/Map'

function App () {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </Router>
  )
}

export default App
