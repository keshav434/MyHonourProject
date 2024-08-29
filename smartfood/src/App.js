import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Plated from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart"; // Import Cart component
import { CartProvider } from './contexts/CardContext'; // Correct path to CartContext
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="app-header">
          <nav className="navbar">
            <div className="navbar-brand">
              <NavLink to="/" className="nav-logo">Mood Eat</NavLink>
            </div>
            <div className="navbar-links">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="about" className="nav-link">About</NavLink>
              <NavLink to="cart" className="nav-link">Cart</NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Plated />} />
            <Route path='about' element={<MenuPage />} />
            <Route path='/menu/:id' element={<Menu />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
