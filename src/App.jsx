import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Reservation from './Pages/Reservation'

function App() {

  return (
    <>
    <Routes>
      <Route path= "/" element = {<Home />} />
      <Route path= "/menu" element = {<Menu />} />
      <Route path= "/reservations" element = {<Reservation />} />
    </Routes>
    </>
  )
}

export default App
