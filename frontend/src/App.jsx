import { Routes,Route } from 'react-router-dom'
import Hero from './pages/hero'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Serve from './pages/Serve'
import Ordered from './pages/Ordered'
import Signup from './pages/Signup'
import Favorite from './pages/Favorite'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/serve' element={<Serve/>}/>
        <Route path='/ordered' element={<Ordered/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
    </div>
  )
}

export default App
