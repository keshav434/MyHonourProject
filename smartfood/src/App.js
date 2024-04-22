import React from 'react';
import { BrowserRouter,  Route,Link, Routes, NavLink} from 'react-router-dom';
import Plated from "./pages/Home"
import MenuPage from "./pages/MenuPage"
import './App.css';
import Header from './components/Layout/Header'
import Menu from "./pages/Menu"
import Mood from "./pages/Moodpage"


function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link to= "/"> Mood Eat</Link>
        <NavLink to="about">Home</NavLink>
        <NavLink to="cart">Cart</NavLink>
        <NavLink to="mood">Mood</NavLink>
        
        </nav>
        </header>
        <main>
          <Routes>
        <Route path='/' element={<Plated />} />
        <Route path='about' element={<MenuPage />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='/mood' element={<Mood />} />
        </Routes>
       </main>
    </BrowserRouter>
  )
}

export default App;
